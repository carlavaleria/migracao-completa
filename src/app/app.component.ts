import { Message } from 'primeng/components/common/api';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  metodoListar: any = [];
  msgs: Message[] = [];
  val2: number;
  msg;
  
    constructor(private http : HttpClient){ }
  
    
    ngOnInit(): void{
      this.http.get
      ('http://localhost:8080/')
      .subscribe(
        data => {
          this.metodoListar = data;
          console.log("listou");
          console.log(data);
          //this.cursos = (data);
          this.listando();
        },
        (err: HttpErrorResponse) => {
          if (err.error.message == undefined) {
            this.erroListar();
          }
        }
      );
    }
  
    metodoAddListar(curso){
      this.metodoListar.push(curso);
      return this.ngOnInit();
    }
    
    listando(): void {
      this.msgs = [];
      this.msgs.push({severity: 'success', summary: 'Success', detail: 'Conexão Bem Sucedida'});
  }
    erroListar(): void {
      this.msgs = [];
      this.msgs.push({severity: 'error', detail: 'Erro ao Listar' +
       'Veja a conexão com servidor'});
    }

    handleRate(event) {
      this.msg = "Obrigada! " + event.value +" estrela";
  }

  handleCancel(event) {
      this.msg = "Avaliação Cancelada";
  }
}
