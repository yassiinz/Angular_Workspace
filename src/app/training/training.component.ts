import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  //event binding
  inputValue:string='';
  onInputChange(event: Event){
    this.inputValue = (event.target as HTMLInputElement).value
  }
  onEnterPressed(){
    console.log("enter pressed !")
  }

  //Property Binding
  isAvailable = false;

  FirstName = 'yassine';

  //Les directives structurelles
  isvisible = false; 

  products : string []= ['Tee-shirt', 'Basket Nike', 'Lunette de soleil'];

  //Les directives attributs
  isError = false;
  resultat = 15;
}
