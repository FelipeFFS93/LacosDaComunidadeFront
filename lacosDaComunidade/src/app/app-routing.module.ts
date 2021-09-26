import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:"", redirectTo: "home", pathMatch: "full"},

  {path:"entrar", component:EntrarComponent},

  {path: "cadastrar", component:CadastrarComponent},
  
  {path: "menu", component:MenuComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'tema', component: TemaComponent},

  {path: 'home', component: HomeComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  
  {path: 'tema-delete/:id', component: TemaDeleteComponent},

  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},

  {path: 'user-edit/:id', component: UserEditComponent},

  {path: 'cadastrar-evento', component: CadastrarEventoComponent},

  {path: 'tecnologia', component: TecnologiaComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
