import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeUserName, customIncrement } from '../counter.action';
import { getUserName } from '../counter.selectors';
import { CounterState } from '../counter.store';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit{

  value !: number 
  userName !: string
  constructor(private store : Store<{counterModule : CounterState}>){}
  ngOnInit() : void{
    // !Without using the Selectore 
    // this.store.select('counterModule').subscribe(data =>{
    //   console.log("User NAme Observable Called!!");
      
    //   this.userName =  data.userName
    // })

    // TODO : Using Selector --- > Ek Particular Store mein multiple key agar h toh single time single key changed 
    // TODO : Agar Selector use nhi karte h toh ek key mein changes karenge lekin sara store update hota h phirse 
    this.store.select(getUserName).subscribe(userName =>{
      console.log("User NAme Observable Called!!");
      
      this.userName =  userName
    })
  }
  OnAdd(){
    console.log(this.value);
    // ! somehow i have to send this value in nGRX STORE through the Action
    // ! extra + sigh will make the value coming from input box convert it into the Number
    this.store.dispatch(customIncrement({valuePayal : +this.value}));
    
  }
  onChnageUserName(){

    this.store.dispatch(changeUserName());

  }

}
