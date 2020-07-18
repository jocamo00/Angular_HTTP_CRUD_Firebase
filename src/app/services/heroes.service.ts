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
}
