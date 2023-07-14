// !Reducer is Pure Function 

import { createReducer, on, Store } from "@ngrx/store"
import { changeUserName, customIncrement, decrement, increment, reset } from "./counter.action"
import { initialStore } from "./counter.store"

const _counterReducer = createReducer(initialStore , 
    on(increment , (store)=>{
        return {
            ...store,
            counter : store.counter +1
        }
    }),
    on(decrement , (store)=>{
        return {
            ...store,
             counter : store.counter -1

        }
    }),
    on(reset , (store)=>{
        return {
            ...store,
            counter : 0
        }
    }),
    on(customIncrement , (store , action)=>{
        console.log(action)

        return {
            ...store,
            counter : store.counter + action.valuePayal
        }
    }),
    on(changeUserName , (store)=>{
        return {
            ...store,
            userName : 'Aditya JAin'
        }
    })
);




export function counterReducer(state: any , action: any){
    return _counterReducer(state , action)
}