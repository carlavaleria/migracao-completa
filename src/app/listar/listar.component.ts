import { Message } from 'primeng/components/common/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input("metodoListar")  metodoListar : any = {};
  
  msgs: Message[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  deleteCurso(id): void {
    alert("tem certeza?");
    this.http.delete
    ('http://localhost:8080/'+id)
    .subscribe(
      data => {
        this.metodoListar = (data);
      }
    );
  }

  pesquisar(s:string ): void{
    this.http.get('http://localhost:8080/?nome=' + s)
    .subscribe(data => {
      this.metodoListar = data;
      console.log(data);
    });
  }

  alterarCursos(id, nome , duracao){
    const curso = {
      id:id,
      nome:nome,
      duracao:duracao
    };

    console.log(id,nome,duracao)
    this.http.put('http://localhost:8080/', curso)
    .subscribe(
        data => {
         //this.cursos = data;
          console.log(data);
          this.metodoListar = data;
        }
      );

  }

  metodoAddListar(curso){
    this.metodoListar.push(curso);
    //return this.ngOnInit();
  } 

  listando(): void {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success', detail: 'Listando Com Sucesso'});
}
  erroListar(): void {
    this.msgs = [];
    this.msgs.push({severity: 'error', detail: 'Erro ao Listar' +
     'Veja a conexão com servidor'});
  }

}
