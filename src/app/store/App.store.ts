import { counterReducer } from "../counter/counter.reducer";
import { CounterState } from "../counter/counter.store";
import { PostReducer } from "../posts/postlist/state/post.reducer";
import { PostStore } from "../posts/postlist/state/post.store";

export interface AppStore{
    counter : CounterState,
    posts : PostStore
}

// ! Har Bar jo bhi sytate banaye h particular component k liye usko har bar reducer se bind karne k alawa
// ! humlog appreducer mein sare ko bind kar denge aur simply sirf Appmodule k reducer ko call karenge 
export const appReducer = {
    counterModule : counterReducer,
    postsModule : PostReducer
}