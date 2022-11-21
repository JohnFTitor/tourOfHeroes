import { CommonModule, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  imports: [FormsModule, UpperCasePipe, CommonModule],
  declarations: [
    HeroDetailComponent,
  ],
  exports: [HeroDetailComponent],
})
export class HeroDetailModule { }
