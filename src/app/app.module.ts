import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule ,MapsAPILoader} from '@agm/core';

/* PROJETO */
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';
import { ConsumoapiService } from './consumoapi.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

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
    
    FormsModule,
    SimpleNotificationsModule.forRoot(),
     AgmCoreModule.forRoot({
       apiKey: "AIzaSyBXtF5Kq5zhprBk0PsJMGdqLm_yLXKXf-c",
      libraries: ["places"]
    }),
    
    ReactiveFormsModule
  ],
  providers: [ConsumoapiService, AgmCoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
