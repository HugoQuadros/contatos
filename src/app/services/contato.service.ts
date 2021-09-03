import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";
  constructor() { }

  getContatos():Contato[] {
    
    // tentar carregar os dados da localStorage
    let dados = window.localStorage.getItem(this.chave);

    // verificar se havia dados na localStorage
    // se houver, transforma os dados em array e retorne o array de contatos
    if(dados){
      let contatosCarregados: Contato[] = JSON.parse(dados);
      return contatosCarregados;
    }
    // se não houver, cria um array vazio, guarda esse array no localStorage e retorna esse array
    else{
      window.localStorage.setItem(this.chave, "[]");
      return [];
    }

  }

  addContato(c:Contato): void {
    
    //levantar os contatos do localStorage
    let contatosLocalSto = this.getContatos();

    //adicionar o contato ao final do array
    contatosLocalSto.push(c);

    //salvar o array de volta no localStorage
    window.localStorage.setItem(this.chave, JSON.stringify(contatosLocalSto));

  }

}
