import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

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

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    // Si el id existe actualizo el heroe y si no existe creo el heroe
    if ( this.heroe.id ) {
      this.heroesService.actualizarHeroe( this.heroe )
      .subscribe( resp => {
        console.log( resp );
      });

    } else {
      this.heroesService.crearHeroe( this.heroe )
      .subscribe( resp => {
        console.log( resp );
      });
    }
  }

}
