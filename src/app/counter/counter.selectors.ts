import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.store";

const getCounterStore = createFeatureSelector<CounterState>('counterModule')
export const getCounter = createSelector(getCounterStore , (store)=>{
    return store.counter
})

export const getUserName = createSelector(getCounterStore , (store)=>{
    return store.userName
})