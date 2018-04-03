import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/* PROJETO */
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';
import { ConsumoapiService } from './consumoapi.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule }   from '@angular/forms';

/* FIM PROJETO */



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalheComponent,
    HomeComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConsumoapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
