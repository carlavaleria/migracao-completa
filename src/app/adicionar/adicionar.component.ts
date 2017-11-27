import { Message } from 'primeng/components/common/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  @Output() emitirCursoLista = new EventEmitter();
  
  msgs: Message[] = [];
  nome:string;
   duracao:string;
   constructor(private http: HttpClient) { }
 
 
   ngOnInit() {
     
   }
  
   onclick(nome:string , duracao:string) {
     
    const curso = {
         nome: nome,
         duracao: duracao
       };
       
       if(( nome != undefined ) && ( nome != "") 
       && ( duracao != "") && ( duracao != undefined)){
         this.http.post
           ('http://localhost:8080/', curso)
           .subscribe(
             data => {
               console.log(data);
               this.emitirCursoLista.emit(curso);
             }
           );
 
           this.adicionado();
         } else{
           console.log("erro");
           this.erroAdicionar();
          } 
 
       }

       adicionado(): void {
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Success', detail: 'Curso adicionado'});
    }
      erroAdicionar(): void {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Curso não foi adicionado.' +
         'Talvez os campo(s) estejam vazio(s)'});
      }

}
