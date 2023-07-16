import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/App.store';
import { Post } from '../models/post.model';
import { addPost } from '../postlist/state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  postForm !: FormGroup;
  constructor(private store : Store<AppStore>){}

  ngOnInit():void{
    this.postForm = new FormGroup({
      title : new FormControl('' , [Validators.required , Validators.minLength(6)]),
      description : new FormControl('' , [Validators.required , Validators.minLength(10)])
    })
  }

  showTitle() : any{
    const titleForm = this.postForm.get('title');
    if(titleForm?.touched && !titleForm.valid){
      if(titleForm.errors?.['required']){
          return "Title is Required"
      }

      if(titleForm.errors?.['minlength']){
        return "Title should be minimum of 6 length"
    }
    }
  }

  showDescriptionError() : any{
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid){
      if(descriptionForm.errors?.['required']){
          return 'Description is Required'
      }

      if(descriptionForm.errors?.['minLength']){
        return "Description should be minimum of 6 length"
      }
    }
    
  }

  onAddPost(){
    if(!this.postForm.valid){
        return;
    }
    
    const post : Post = {
      title : this.postForm?.value.title,
      description : this.postForm?.value.description
    }

    this.store.dispatch(addPost({post}));
    
    

  }

}
