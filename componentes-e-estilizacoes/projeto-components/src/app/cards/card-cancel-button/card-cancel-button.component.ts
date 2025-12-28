import { Component } from '@angular/core';

@Component({
  selector: 'app-card-cancel-button',
  standalone: true,
  imports: [],
  templateUrl: './card-cancel-button.component.html',
  // styleUrl: './card-cancel-button.component.scss'
  styles: [
    `
      .card-cancel-button {
        background-color: #f44336;
        color: white;
        font-size: 1.2em;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 10px;

        &:hover {
          background-color: #da190b8e;
        }
      }
    `,
  ],
})
export class CardCancelButtonComponent {}
