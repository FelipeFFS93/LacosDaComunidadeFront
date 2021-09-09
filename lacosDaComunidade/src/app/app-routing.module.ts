import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {path:"", redirectTo: "entrar", pathMatch: "full"},

  {path:"entrar", component:EntrarComponent},

  {path: "cadastrar", component:CadastrarComponent},
  
  {path: "menu", component:MenuComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
