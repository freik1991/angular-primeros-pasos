import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenido a la clase de angular';
  counter : number = 10;

  increaseBy(value : number) : void{
    this.counter += value ;
  }

  reset() : void{
    this.counter = 10;
  }
}
