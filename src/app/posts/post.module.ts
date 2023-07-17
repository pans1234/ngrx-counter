import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostlistComponent } from "./postlist/postlist.component";
import { PostReducer } from "./postlist/state/post.reducer";
import { POST_ACTION_NAME} from "./postlist/state/post.selectors"
const routes : Routes=[
    {
        path : '',
        component : PostlistComponent,
        children : [
            {
              path : 'add',
              component : AddPostComponent
            },
            {
              path : 'edit/:id',
              component : EditPostComponent
            }
          ]
    }
]

@NgModule({
    declarations:[
        PostlistComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports : [
        CommonModule ,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FormsModule,
        StoreModule.forFeature(POST_ACTION_NAME , PostReducer)

    ]
})
export class PostModule{

}