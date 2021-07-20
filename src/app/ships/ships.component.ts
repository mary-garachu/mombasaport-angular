import { Component, OnInit } from '@angular/core';
import { Ship } from './ship-interface';
import { SHIPS } from './mock-data';



@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
ships: Ship[] = SHIPS;

  constructor() { }

  ngOnInit(): void {
  }

}
