import { Component, ViewEncapsulation } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

import { CardButtonComponent } from '../card-button/card-button.component';
import { CardCancelButtonComponent } from '../cards/card-cancel-button/card-cancel-button.component';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardButtonComponent, CardCancelButtonComponent, MatSlideToggle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CardComponent {
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
