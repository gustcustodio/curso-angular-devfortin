import { Component } from '@angular/core';
import { CardButtonComponent } from '../card-button/card-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: '100,00',
    },
  };
}
