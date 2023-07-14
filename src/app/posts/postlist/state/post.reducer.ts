import { createReducer, on } from "@ngrx/store"
import { initialPostList } from "./post.store"

const _postReducer = createReducer(initialPostList 
    );


export function PostReducer(state: any , action: any){
    return _postReducer(state , action)
}