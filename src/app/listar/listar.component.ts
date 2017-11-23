import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input("metodoListar")  metodoListar : any = {};
  
  constructor() { }

  ngOnInit() {
  }

  metodoAddListar(curso){
    this.metodoListar.push(curso);
    //return this.ngOnInit();
  } 
}
