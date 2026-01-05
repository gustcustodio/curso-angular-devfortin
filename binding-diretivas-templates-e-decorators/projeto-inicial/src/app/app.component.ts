import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto-inicial';
  inputText = 'Texto via property binding';
  inputType = 'text';
  isDisabled = false;
  nome = 'Angular';

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleEventInput(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

}
