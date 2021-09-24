import { Tema } from "./tema"
import { Usuario } from "./user"


export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public tema: Tema
    public usuario: Usuario
}