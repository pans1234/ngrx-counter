import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostlistComponent } from './posts/postlist/postlist.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'counter',
    component : CounterComponent
  },
  {
    path : 'post',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
