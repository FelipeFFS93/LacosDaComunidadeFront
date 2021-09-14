import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/user';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://lacosdacomunidade.herokuapp.com/usuario/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://lacosdacomunidade.herokuapp.com/usuario/cadastrar', user)
  }

 // getByIdUser(id: number): Observable<Usuario>{
   // return this.http.get<Usuario>(`https://lacosdacomunidade.herokuapp.com/usuario/${id}´)
  //}


  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }

}
