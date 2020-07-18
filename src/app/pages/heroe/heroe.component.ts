import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faSmileWink = faSmileWink;
  faDizzy = faDizzy;
  faSave = faSave;

  constructor() { }

  ngOnInit(): void {
  }

}
