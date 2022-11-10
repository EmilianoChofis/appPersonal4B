//importaciones de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//importaciones de terceros
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';


//importaciones propias


@NgModule({
  declarations: [AppComponent],
  imports: [ //implementando otros modulos
    BrowserModule,
    HeroesModule,
    ReactiveFormsModule
  ],
  providers: [], //ponemos los servicios
  bootstrap: [AppComponent] //es el componente con el que arranca/inicializa la aplicación
})
export class AppModule {}
