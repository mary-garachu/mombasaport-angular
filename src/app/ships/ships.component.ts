import { Component, OnInit } from '@angular/core';
import { Ship, Ship2 } from './ship-interface';
import { SHIPS } from './mock-data';



@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
ships: Ship[] = SHIPS;
ships2: Ship2[] = [];

  constructor() { }

  ngOnInit(): void {
    this.ships.map((ship, index) => {
      if(ship.flag == "green"){
        return this.ships2.push({
          name: ship.name,
          flag: ship.flag,
          status: 'accepted'
        })
      }
      if(ship.flag == 'red' && ship.type =="cargo"){
        return this.ships2.push({
          name: ship.name,
          flag: ship.flag,
          status: 'accepted'
        })
      }
      if(index > 1) {
        if(ship.flag == 'blue'&& this.ships[index - 1].flag== 'red' && this.ships[index - 1].flag== 'red') {
          return this.ships2.push({
            name: ship.name,
            flag: ship.flag,
            status: 'accepted'
          })
        }
      }
      if(index < length - 1) {
        if(this.countVowels(ship.name) == this.countVowels(this.ships[index + 1].name) && ship.flag === 'blue') {
          return this.ships2.push({
            name: ship.name,
            flag: ship.flag,
            status: 'accepted'
          })
        }
      }
      return this.ships2.push({
        name: ship.name,
        flag: ship.flag,
        status: 'denied'
      })
    })
  }
 
 countVowels(subject: string) {
    return (subject.match(/[aeiou]/gi)|| []).length;
}

}
