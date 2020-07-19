import { Component, OnInit } from '@angular/core';
import { faPlus, faSyncAlt, faExclamation, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  faPlus = faPlus;
  faSyncAlt = faSyncAlt;
  faExclamation = faExclamation;
  faPen = faPen;
  faTrash = faTrash;

  heroes: HeroeModel[] = [];


  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
      });
  }


}
