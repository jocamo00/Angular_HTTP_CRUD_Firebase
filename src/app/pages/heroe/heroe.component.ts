import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';

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

  heroe = new HeroeModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    console.log(form);
    console.log(this.heroe);
  }

}
