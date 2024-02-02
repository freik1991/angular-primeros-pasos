import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters : Character[] = [
    {
      id : uuid(),
      name : 'Krillin',
      power : 5000
    },
    {
      id : uuid(),
      name : 'Goku',
      power : 10000
    },
    {
      id : uuid(),
      name : 'Gohan',
      power : 7000
    }
  ];

  addCharacter(character : Character) : void{
    const newCharacter : Character = {id : uuid(),...character}
    console.log(uuid());
    this.characters.push(newCharacter);
  }

  DeleteCharacterById(id : string) : void{
    this.characters = this.characters.filter(character => character.id != id)
  }

}
