import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {path:"", redirectTo: "menu", pathMatch: "full"},

  {path:"entrar", component:EntrarComponent},

  {path: "cadastrar", component:CadastrarComponent},
  
  {path: "menu", component:MenuComponent},

  {path: 'inicio', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
