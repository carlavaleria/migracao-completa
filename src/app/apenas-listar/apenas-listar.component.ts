import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apenas-listar',
  templateUrl: './apenas-listar.component.html',
  styleUrls: ['./apenas-listar.component.css']
})
export class ApenasListarComponent implements OnInit {

  @Input("metodoListar")  metodoListar : any = {};
  
  constructor() { }

  ngOnInit() {
    
  }

  metodoAddListar(curso){
    this.metodoListar.push(curso);
    //return this.ngOnInit();
  } 

}
