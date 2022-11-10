import {NgModule} from "@angular/core";
import { ListComponent } from './list/list.component';
import { AddHeroeComponent } from "./addHeroes/add.component";
import {CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations:[ListComponent, AddHeroeComponent],
  imports:[CommonModule, FormsModule],
  providers:[],
  exports: [ListComponent, AddHeroeComponent]
})
export class HeroesModule{}
