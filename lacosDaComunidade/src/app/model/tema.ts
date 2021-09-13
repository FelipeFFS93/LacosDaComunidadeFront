import { Postagem } from "./postagem"

export class Tema{
    public id: number
    public temaEvento: string
    // public localEvento: string
    // public dataHorario: string
    // public quantPessoas: string
    public postagem: Postagem[]
}