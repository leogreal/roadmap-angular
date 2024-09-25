import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardComponent } from './card/card.component';
import { CardButtonCancelComponent } from './card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [CardComponent, CardButtonComponent, CardButtonCancelComponent],
  exports: [CardComponent, CardButtonComponent],
  imports: [CommonModule],
})
export class CardsModule {}
