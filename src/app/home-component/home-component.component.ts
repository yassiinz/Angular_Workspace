import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  getDateTime(): string {
    return new Date().toLocaleTimeString();
    }
    items = ['Item 1', 'Item 2', 'Item 3'];
      onButtonClick() {
    console.log('Le bouton a été cliqué !');
  }
  inputvalue: string = " ";
  OninputChange(event : Event){
    this.inputvalue = (<HTMLInputElement>event.target).value
  }
  OnEnterPressed(){
    console.log("enter key has been pressed !")
  }
  fname ="yassine"
  products : string []= ['Tee-shirt', 'Basket Nike', 'Lunette de soleil'];
  isError = true;
}
