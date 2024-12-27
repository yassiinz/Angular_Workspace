import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() child!: string;
  @Output() childDelete = new EventEmitter<void>()
  onDeleteClick() {
    this.childDelete.emit();
  }
}
