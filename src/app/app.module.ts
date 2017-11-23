import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

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

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
