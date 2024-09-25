import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  plan = {
    type: 'Simples',
    price: 100,
  };

  public getFullPrice(): string {
    return `R$ ${this.plan.price},00/Mês`;
  }
}
