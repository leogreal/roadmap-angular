import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { CardButtonCancelComponent } from './card-button-cancel/card-button-cancel.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent, CardButtonComponent, CardButtonCancelComponent],
  exports: [CardComponent, CardButtonComponent],
  imports: [CommonModule, MatSliderModule],
})
export class CardsModule {}
