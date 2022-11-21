import { CommonModule, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [FormsModule, UpperCasePipe, CommonModule],
  declarations: [
    HeroesComponent,
  ],
  exports: [HeroesComponent],
})
export class HeroesModule { }
