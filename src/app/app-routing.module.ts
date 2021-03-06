import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path:'gatos', component: ListaComponent},
  { path:'caes', component: ListaComponent},
  { path:'gato/:id', component: DetalheComponent },
  { path:'cao/:id', component: DetalheComponent },
  {path: 'cadastro', component: CadastroComponent},
  { path:'',component: HomeComponent },
  { path:'**',component: HomeComponent }
  
  ];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
