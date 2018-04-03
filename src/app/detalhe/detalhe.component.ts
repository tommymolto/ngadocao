import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Animais } from '../pojo';
import { ConsumoapiService } from '../consumoapi.service';
@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  animal: any;
  constructor(
    public rota: ActivatedRoute,
    public consumoapi: ConsumoapiService) {
      //let id = this.rota.snapshot.paramMap.get('id');
      // ou
    this.rota.params
      .subscribe(params => {
        console.log(params);
        
        this.consumoapi.getAnimal(params['id']).subscribe(retorno => {
          this.animal = retorno;
        })
        
      });
  }
  ngOnInit() {
  }

}
