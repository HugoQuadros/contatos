import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick = new EventEmitter();

  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  }

  cs:ContatoService = new ContatoService();

  hide():void {
    this.onCancelarClick.emit();
  }
  
  constructor() { }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

  addTelefone():void{
    this.novoContato.telefones.push("");
  }

  removeTelefone(pos:number):void{
    this.novoContato.telefones.splice(pos,1);
  }

  salvar():void{
    this.cs.addContato(this.novoContato);
    this.onCancelarClick.emit();
  }

}
