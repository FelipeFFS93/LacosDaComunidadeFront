import { Tema } from "./tema"
import { Usuario } from "./user"


export class Postagem{
    public id: number
    public nomeEvento: string
    public tipoEvento: string
    public site: string
    public descricaoPessoas: string
    public tema: Tema
    public usuario: Usuario
}