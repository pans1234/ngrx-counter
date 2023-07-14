import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../counter.selectors';
import { CounterState } from '../counter.store';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit , OnDestroy{

  // @Input() counter: any
  counter !: number
  // TODO: Subscribed data should be unsubscribed as well!! ---> Otherwise create a Observable type 
  // TODO: Variable then and store select function observable into it then no need to use unsubscribe it 
  counterSubscription !: Subscription
  counter$ !: Observable<CounterState> 
  // constructor(private store : Store<{counterModule : {counter : number}}>){}
  // !Below is the Refactoring the store
  constructor(private store : Store<{counterModule : CounterState}>){}
  ngOnInit():void{
    // ! Without using the Selector
    // this.counterSubscription = this.store.select('counterModule').subscribe(data =>{
    //   console.log("Counter Output Observable Called!!");
      
    //   this.counter = data.counter
    // })

    // TODO : Store teh select function observable into counter$
    // this.counter$ = this.store.select('counterModule');
    // console.log(this.counter$);

    // TODO : by using the SELECTOR 
    this.store.select(getCounter).subscribe((counterValue) =>{
      console.log("Counter Output Observable Called!!");
      this.counter = counterValue
    })
    
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
