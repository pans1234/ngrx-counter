import { Post } from "../../models/post.model"

export interface PostStore {
    posts: Post[]
}

export const initialPostList: PostStore = {
    posts: [
        {
            id: "1",
            title: "Sample Title 1",
            description: "Sample Description 1"
        },
        {
            id: "2",
            title: "Sample Title 2",
            description: "sampel Description 2"
        }
    ]
}