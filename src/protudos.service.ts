import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable() 
export class ProdutosService{
  [x: string]: any;
     
      private readonly produtos: Produto[] = 
   [
        new Produto("LIV001", "Livro TDD e BDD na prática", 69.90),
        new Produto("LIV002", "Livro JavaScript do 0 ao Avançado", 59.80),
        new Produto("LIV003", "Livro Desbravando o Java", 64.90),
        new Produto("liv004", "Inteligência Artificial como Serviço", 65.50),
    ];


    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }
}






