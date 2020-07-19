import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://angular-http-crud-firebase.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ) {
    // Le pasamos dos parametros uno la ruta donde se insertara y el heroe que vamos a insertar
    return this.http.post(`${ this.url }/heroes.json`, heroe)
      .pipe(
        map( (resp: any) => {
          heroe.id = resp.name; // (resp.name es el id)
          return heroe; // devuelve todo el objeto heroe con su id
        })
      );
  }

  actualizarHeroe( heroe: HeroeModel ) {
    // Esto es porque necesito mandar el heroe sin el id
    // Creo una copia de heroe con todos sus atributos
    const heroeTemp = {
      ...heroe
    };

    // Le borra el id
    delete heroeTemp.id;

    // Le pasamos la url, el id del heroe a actualizar y el objeto que queremos actualizar que es el heroe
    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp);
  }

  getHeroe( id: string ) {
    return this.http.get(`${ this.url }/heroes/${ id }.json`);
  }

  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  private crearArreglo( heroesObj: object ) {

    const heroes: HeroeModel[] = [];

    if ( heroesObj === null ) {
      return [];
    }

    Object.keys( heroesObj ).forEach( key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });

    return heroes;
  }
}
