import { Component, OnInit } from '@angular/core';
import { faPlus, faSyncAlt, faExclamation, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';


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


  borrarHeroe( heroe: HeroeModel, i: number ) {
    // Mensaje de confirmación
    Swal.fire({
      title: '¿Está seguro',
      text: `Está seguro que desea borrar a ${ heroe.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value ) {
        this.heroes.splice(i, 1); // Elimina ese heroe
        this.heroesService.borrarHeroe( heroe.id ).subscribe();
      }
    });
  }
}
