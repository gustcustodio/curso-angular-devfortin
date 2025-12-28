import { Component } from '@angular/core';
import { CardRoxoButtonComponent } from "../card-roxo-button/card-roxo-button.component";
import { CardCancelButtonComponent } from "../cards/card-cancel-button/card-cancel-button.component";

@Component({
  selector: 'app-card-roxo',
  standalone: true,
  imports: [CardRoxoButtonComponent, CardCancelButtonComponent],
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {

}
