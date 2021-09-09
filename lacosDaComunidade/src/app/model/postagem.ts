import { Tema } from "./tema"
import { Usuario } from "./user"


export class Postagem{
    public id: number
    public nomeEvento: string
    public tipoEvento: string
    public site: string
    public descricaoPessoas: string //usamos como descrição do evento, para não ter que alterar o back. Quantidade de pessoas já existe no tema
    public tema: Tema
    public usuario: Usuario
}