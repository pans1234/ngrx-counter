import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  

  onIncrement(){
    this.increment.emit();
  }

  onDecrement(){
    this.decrement.emit();

  }

  onReset(){
    this.reset.emit();
  }

}
