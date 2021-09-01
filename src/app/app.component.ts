import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrandoModal = true;
  title = 'contatos';

  hide(){
    this.mostrandoModal = false;
  }

  mostrarModal(){
    console.log("Eute escutei, meu filho");
    this.mostrandoModal = true;
  }
}