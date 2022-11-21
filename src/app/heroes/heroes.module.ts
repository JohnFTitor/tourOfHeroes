import { CommonModule, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [FormsModule, UpperCasePipe, CommonModule, HeroDetailModule, AppRoutingModule],
  declarations: [
    HeroesComponent,
  ],
  exports: [HeroesComponent],
})
export class HeroesModule { }
