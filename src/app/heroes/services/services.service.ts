import { Injectable } from '@angular/core';
import { Heroe } from '../entities/heroe';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _heroes: Heroe[] = [];

  get heroes(){
    return [...this._heroes];
  }
  saveHeroe(heroe: Heroe){
    this._heroes.push(heroe);
  }
  constructor() { }
}
