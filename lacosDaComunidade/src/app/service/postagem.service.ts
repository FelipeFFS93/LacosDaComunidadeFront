import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://lacosv2.herokuapp.com/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://lacosv2.herokuapp.com/postagem/${id}`, this.token)
  }

  // getByNomeEvento(nomeEvento: string): Observable<Postagem>{
  //   return this.http.get<Postagem>(`https://lacosv2.herokuapp.com/postagem/nomeEvento/${nomeEvento}`, this.token)
  // }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://lacosv2.herokuapp.com/postagem/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://lacosv2.herokuapp.com/postagem', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://lacosv2.herokuapp.com/postagem', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://lacosv2.herokuapp.com/postagem/${id}`, this.token)
  }


}