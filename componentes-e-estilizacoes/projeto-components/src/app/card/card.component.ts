import { Component } from '@angular/core';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardCancelButtonComponent } from "../cards/card-cancel-button/card-cancel-button.component";

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
  imports: [CardButtonComponent, CardCancelButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
