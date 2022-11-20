import { UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [FormsModule, UpperCasePipe],
  declarations: [
    HeroesComponent,
  ],
  exports: [HeroesComponent],
})
export class HeroesModule { }
