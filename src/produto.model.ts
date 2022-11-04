export class Produto {
    id: number;
    codigo: string;
    titulo: string;
    preco: number;

    constructor(codigo: string, titulo: string, preco: number) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.preco = preco;
    }
}