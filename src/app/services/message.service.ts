import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage(){
    return['message1','message2','message3'];
  }
}
