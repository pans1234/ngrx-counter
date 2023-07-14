import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/store/App.store';
import { getPostInitialize, Post } from '../models/post.model';
import { getPosts } from './state/post.selectors';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit{

  posts !: Observable<Post[]>
  // posts : Post[]  = []

  // constructor(private store : Store<{counterModule : {} , postsModule : {}}>){}
  constructor(private store : Store<AppStore>){}


  ngOnInit():void{
     this.posts =  this.store.select(getPosts)
     
  }
  
}
