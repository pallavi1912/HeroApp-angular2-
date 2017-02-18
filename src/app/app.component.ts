import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{

  title = 'app works!';
  heroes : Hero[];
  selectedHero : Hero;

  constructor( private heroService:HeroService ) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() : void{
   this.getHeroes();
  }

  


  onSelect(hero : Hero) : void{
  console.log(hero.name);
  this.selectedHero= hero;
  }
}
