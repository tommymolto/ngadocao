import { Component, OnInit } from '@angular/core';
import {} from '@angular/forms';
import { ConsumoapiService } from '../consumoapi.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ConsumoapiService]
})
export class CadastroComponent implements OnInit {

  animal = {
    nome:'',
    tipo:'',
    descricao:'',
    telefone:'',
    lat:'0',
    lgn:'0'
  };
  constructor(
    public api: ConsumoapiService) { }

  ngOnInit() {
  }

  salvar(){
    this.api.insereAnimal(this.animal).subscribe(ret => {
      console.log(ret);
    })
  }
}
