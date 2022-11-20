import { Component, OnInit } from '@angular/core';
import { Hero } from './models';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor(){ }

  ngOnInit(): void {
    console.log('I have been initialized')
  }
}
