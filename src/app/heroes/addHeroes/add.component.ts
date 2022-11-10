import {Component} from "@angular/core"
import { AppComponent } from '../../app.component';
import { Heroe } from "../entities/heroe";
import { ListComponent } from '../list/list.component';
import { ServicesService } from '../services/services.service';

@Component(
  {
  selector: 'app-add-heroe',
  templateUrl: './add.component.html',
  }
)

export class AddHeroeComponent{
  heroe: Heroe = {
     name: 'Chofis',
     power: 1000,
    habilities: ['desollar', 'masacrar']
  };

  constructor(private readonly service:ServicesService){

  }
  saveHeroe(){
    this.service.saveHeroe(this.heroe);
  }

}
