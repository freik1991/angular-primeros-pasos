import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = "Hulk";
  public edad : number = 45;

  get capitalizedName() : string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.edad}`;
  }

  changeHero() : void{
     this.name = 'Batman';
  }

  changeAge() : void{
    this.edad = 48;
  }

  resetForm() : void {
    this.name = 'Hulk';
    this.edad = 45;
  }
}
