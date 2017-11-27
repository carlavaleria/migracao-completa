import { FormGroup, FormBuilder } from '@angular/forms';
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
  @Output() emitirCursoLista = new EventEmitter();
  curso = {};
  msgs: Message[] = [];
  formulario: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [''],
      duracao: ['']
    });
    console.log(this.formulario.value)
  }

  deleteCurso(id): void {
    alert("tem certeza?");
    this.http.delete
    ('http://localhost:8080/'+id)
    .subscribe(
      data => {
        this.metodoListar = (data);
        const teste:string = "curso";
        this.emitirCursoLista.emit(teste);
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

  alterarCursos(id, nome, duracao){
    console.log(this.formulario.value.nome, this.formulario.value.duracao);
    if(this.formulario.value.nome == ''){
      this.curso = {
        id: id,
        nome: nome,
        duracao: this.formulario.value.duracao
      }
    }else if(this.formulario.value.duracao == ''){
      this.curso = {
        id: id,
        nome: this.formulario.value.nome,
        duracao: duracao
      }
    }else{
      this.curso = {
        id: id,
        nome: this.formulario.value.nome,
        duracao: this.formulario.value.duracao
      }
    }
    
    this.http.put('http://localhost:8080/', this.curso)
    .subscribe(
        data => {
         //this.cursos = data;
          console.log(data);
          this.metodoListar = data;
          const teste:string = "curso";
          this.emitirCursoLista.emit(teste);
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
