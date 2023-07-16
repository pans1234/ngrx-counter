import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

// export const Add_Post_Action = 'payal'

export const addPost = createAction('addPost' , props<{post : Post}>());
export const updatePost = createAction('updatePost' , props<{updatepost : Post}>());
export const deletePost = createAction('deletePost' , props<{id : string | undefined}>());