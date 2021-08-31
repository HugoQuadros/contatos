import { Injectable } from '@angular/core';
import { Contato } from '../models/contato'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

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
    return this.baseDeContato;
  }

  addContato(c:Contato):void{
    this.baseDeContato.push(c);
  }

  constructor() { }
}

