import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  children: string[] = ['child1', 'child2', 'child3'];
  deleteChild(child: string) {
    this.children = this.children.filter(c => c !== child);
  }
  messages: string[] = [];
  constructor(private messageService: MessageService) {
    this.messages = messageService.getMessage();
   }
}
