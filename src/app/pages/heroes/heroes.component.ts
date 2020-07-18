import { Component, OnInit } from '@angular/core';
import { faPlus, faSyncAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  faPlus = faPlus;
  faSyncAlt = faSyncAlt;
  faExclamation = faExclamation;

  constructor() { }

  ngOnInit(): void {
  }

}
