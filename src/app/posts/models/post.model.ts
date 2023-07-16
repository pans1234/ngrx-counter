export interface Post{
    id?: string ,
    title : string,
    description : string
}
export const getPostInitialize : Post={
    id: "",
    title: "",
    description: ""
}