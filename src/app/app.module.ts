import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/primeng';
import { AdicionarComponent } from 'app/adicionar/adicionar.component';
import { ListarComponent } from 'app/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng'; 
import {DataGridModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    ListarComponent,
    PesquisarComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    PaginatorModule,
    DataGridModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    RatingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
