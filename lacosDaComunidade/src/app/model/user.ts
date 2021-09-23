import { Postagem } from "./postagem"

export class Usuario{

    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public token:string
    public ongs: string
    public genero: string
    public CPF: string
    public CNPJ: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]
}