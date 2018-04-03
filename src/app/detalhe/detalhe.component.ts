import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Animais } from '../pojo';
@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  animal: any;
  constructor(
    public rota: ActivatedRoute) {
    this.rota.params
      .subscribe(params => {
        console.log(params);
        this.animal = params['id'];
      });
  }
  ngOnInit() {
  }

}
