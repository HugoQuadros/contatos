import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick = new EventEmitter();

  hide():void {
    this.onCancelarClick.emit();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
