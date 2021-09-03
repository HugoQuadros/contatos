import { Injectable } from '@angular/core';
import { Contato } from '../models/contato'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseDeContatos:Contato[];
  private chave:string = "CONTATOS"

  constructor() { 

    // carregando informação do localStorage na chave CONTATOS
    let dados = window.localStorage.getItem(this.chave);

    if(dados){
      // se existe alguma coisa no localStorage, transforma a string em um array de contatos (JSON.parse) e guarda em baseDeContatos
      this.baseDeContatos = JSON.parse(dados);
    }
    else{
      // se não existe, adiciona um array vazio no localStorage e na baseDeContatos
      this.baseDeContatos = [];
      window.localStorage.setItem(this.chave, "[]");
    }
   }

  baseDeContato: Contato[] = [
    {
      nome: "Zé das Couve",
      email: "zedascouve@teste.com",
      telefones: ["99999-9999"]
    },
    {
      nome: "Zé das Couve 2",
      email: "zedascouve@teste.com",
      telefones: ["98888-8888", "99999-9999", "99999-9999"]
    },
    {
      nome: "Zé das Couve 3",
      email: "zedascouve@teste.com",
      telefones: ["97777-7777"]
    },
    {
      nome: "Zé das Couve 4",
      email: "zedascouve@teste.com",
      telefones: ["96666-6666"]
    },
    {
      nome: "Zé das Couve 5",
      email: "zedascouve@teste.com",
      telefones: ["95555-5555"]
    },
    {
      nome: "Zé das Couve 6",
      email: "zedascouve@teste.com",
      telefones: ["94444-4444"]
    },
    {
      nome: "Zé das Couve 7",
      email: "zedascouve@teste.com",
      telefones: ["93333-3333"]
    },
    {
      nome: "Zé das Couve 8",
      email: "zedascouve@teste.com",
      telefones: ["92222-2222"]
    }
  ]

  getContatos(): Contato[] {
    return this.baseDeContatos;
  }

  addContato(c:Contato):void{
    // adiciona a tarefa na baseDeContatos
    this.baseDeContatos.push(c);
    // atualiza o localStorage com a baseDeContatos nova
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
  }

}

