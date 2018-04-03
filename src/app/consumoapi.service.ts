import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsumoapiService {

    urlAPI = 'http://fe2018noite-fronendinfnet.c9users.io:8081/animais';
  constructor(
      private web: HttpClient
      ) { }
    
    listaAnimais(){
        return this.web.get(this.urlAPI);
    }      

}
