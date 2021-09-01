import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/contato';

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
    telefones:["7777-7777", "8888-8888", "9999-9999"]
  }

  hide():void {
    this.onCancelarClick.emit();
  }
  
  constructor() { }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

}
