import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  metodoListar: any = [];
  
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
          //alert("está listando correto");
        }
      );
  
    }
  
    metodoAddListar(curso){
      this.metodoListar.push(curso);
      return this.ngOnInit();
    }
}
