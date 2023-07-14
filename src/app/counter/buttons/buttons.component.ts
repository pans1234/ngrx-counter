import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.action';
import { CounterState } from '../counter.store';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  // ! Commeneted Things are Input And Output Property of Angular to understand why we have used the NGRX
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  // constructor(private store : Store<{counterModule : {counter : number}}>){}
  constructor( private store : Store<{counterModule : CounterState}>){}
  onIncrement(){
    // this.increment.emit();
    this.store.dispatch(increment())

  }

  onDecrement(){
    // this.decrement.emit();
    this.store.dispatch(decrement())

  }

  onReset(){
    // this.reset.emit();
    this.store.dispatch(reset())
  }

}
