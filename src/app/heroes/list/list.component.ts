import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   public heroeNames : string[] = ['Hulk','Batman','Spiderman','Flash'];
  public deleteHeroe?: string;
   removeLastHero() : void{
    this.deleteHeroe = this.heroeNames.pop();
   }

  }
