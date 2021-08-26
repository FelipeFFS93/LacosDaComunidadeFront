import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {path:"", redirectTo: "menu", pathMatch: "full"},

  {path:"entrar", component:EntrarComponent},
  {path: "cadastrar", component:CadastrarComponent},
  {path: "menu", component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
