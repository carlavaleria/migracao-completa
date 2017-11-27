import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apenas-listar',
  templateUrl: './apenas-listar.component.html',
  styleUrls: ['./apenas-listar.component.css']
})
export class ApenasListarComponent implements OnInit {

  @Input("metodoListar")  metodoListar : any = {};
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  pesquisar(s:string ): void{
    this.http.get('http://localhost:8080/?nome=' + s)
    .subscribe(data => {
      this.metodoListar = data;
      console.log(data);
    });
  }
  metodoAddListar(curso){
    this.metodoListar.push(curso);
    //return this.ngOnInit();
  } 

}
