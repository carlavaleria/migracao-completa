import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  @Input('metodoListarCurso') metodoListarCurso: any = {};
  @Output() emitirCursoLista = new EventEmitter();
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  
  pesquisar(s:string ): void{
    this.http.get('http://localhost:8080/?nome=' + s)
    .subscribe(data => {
      this.metodoListarCurso = data;
      console.log(data);
    });
  }


}
