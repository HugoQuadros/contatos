import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrandoModal = false;
  title = 'contatos';

  mostrarModal(){
    console.log("Eute escutei, meu filho");
    this.mostrandoModal = true;
  }
}