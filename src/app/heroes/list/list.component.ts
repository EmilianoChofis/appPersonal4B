import {Component} from "@angular/core"
import { Heroe } from "../entities/heroe";
import { HeroesModule } from '../heroes.module';
import { ServicesService } from '../services/services.service';

@Component({
  selector:'app-list',
  templateUrl: './list.component.html',

})

export class ListComponent{
get heroes(){
  return this.service.heroes;
}

  constructor(private readonly service:ServicesService){

  }
};

  // constructor(){
  //   console.log(this.heroe)
  //   this.heroes.unshift({name: "emi", power: 5, habilities:["volar", "romper madres"]});
  //   console.log(this.heroe)
  // }

