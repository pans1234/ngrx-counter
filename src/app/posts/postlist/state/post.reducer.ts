import { createReducer, on } from "@ngrx/store"
import { addPost, deletePost, updatePost } from "./post.action";
import { initialPostList } from "./post.store"

const _postReducer = createReducer(initialPostList ,
    // ! CREATE A POST ----> NGRX
    on(addPost, (store , action)=>{

        console.log(action);

        let post = {...action.post}
        post.id = (store.posts.length +1).toString();

        return {
            ...store ,
            // TODO : For Immutable the store we have make a copy of it add the post 
            posts : [...store.posts , post]
        }
    }),
    // ! UPDATE A POST -----> NGRX
    on(updatePost , (store , action)=>{
        console.log(action);
        const updatedPost = store.posts.map(post =>{
            return (post.id === action.updatepost.id) ? action.updatepost : post
        })
        return {
            ...store,
            posts : updatedPost
        }
    }),
    // ! DELETE A POST ----> NGRX
    on(deletePost, (store , action)=>{
        const currentPosts = store.posts.filter(post=>{
            return post.id !== action.id
        })

        return {
            ...store,
            posts : currentPosts
        }
    })
    );


export function PostReducer(state: any , action: any){
    return _postReducer(state , action)
}