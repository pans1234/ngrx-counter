import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostStore } from "./post.store";

// TODO : Featuire Selector bana h kis type ka aur kiska
export const getPostListSelectors = createFeatureSelector<PostStore>('postModule')

// ? make the selectors for PostStore
export const getPosts = createSelector(getPostListSelectors , (store) =>{
    console.log('-'.repeat(200));
    console.log(store);
    
    return store.posts
} )