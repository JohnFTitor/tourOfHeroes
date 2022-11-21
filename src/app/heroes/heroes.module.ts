import { CommonModule, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [FormsModule, UpperCasePipe, CommonModule, HeroDetailModule],
  declarations: [
    HeroesComponent,
  ],
  exports: [HeroesComponent],
})
export class HeroesModule { }
