import { Component, OnInit } from '@angular/core';
import { ConsumoapiService} from '../consumoapi.service' ;
import { RootObject, Localizacao, Animais} from '../pojo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConsumoapiService]
  
})
export class HomeComponent implements OnInit {

  dadosExibidos: Animais[];
  constructor(
    private web: ConsumoapiService,
    private rota: Router
    ) { }

  ngOnInit() {
    this.web.listaAnimais().subscribe( ret => {
      this.dadosExibidos = <Animais[]>ret;
      });
  }
  exibeDetalhes(animal){
    this.rota.navigate(['/gato/'+ animal.id ]);
  }
  cadastraAnimal(){
    this.rota.navigate(['/cadastro' ]);
  }
}
