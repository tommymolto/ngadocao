import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ConsumoapiService } from '../consumoapi.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ConsumoapiService, AgmCoreModule]
})
export class CadastroComponent implements OnInit {

  animal = {
    nome:'',
    tipo:'',
    descricao:'',
    telefone:'',
    lat:22,
    lgn:-32
  };
  public searchControl: FormControl;
  public zoom: number;
  
  @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(
    public api: ConsumoapiService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.animal.lat = place.geometry.location.lat();
          this.animal.lgn = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  salvar(){
    this.api.insereAnimal(this.animal).subscribe(ret => {
      console.log(ret);
    })
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.animal.lat = position.coords.latitude;
        this.animal.lgn = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
