import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

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

    // Alert al guardar heroe
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      confirmButtonText: 'false'
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    // Si el id existe actualizo el heroe y si no existe creo el heroe
    if ( this.heroe.id ) {
      peticion = this.heroesService.actualizarHeroe( this.heroe );

    } else {
      peticion = this.heroesService.crearHeroe( this.heroe );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }

}
