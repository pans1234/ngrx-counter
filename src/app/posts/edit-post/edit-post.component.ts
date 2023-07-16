import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscribable, Subscription } from 'rxjs';
import { AppStore } from 'src/app/store/App.store';
import { Post } from '../models/post.model';
import { updatePost } from '../postlist/state/post.action';
import { getPostById } from '../postlist/state/post.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit , OnDestroy{

  updateForm !: FormGroup
  editPost !: Post
  editPostSubscription !: Subscription
  // TODO : below Activated route se jis particular button ya id pe click kiya uska data edit wale form mein ajayega 
  constructor(private router : ActivatedRoute , private store : Store<AppStore>, private route : Router){}
  ngOnInit():void{
    this.router.paramMap.subscribe(param=>{
      // console.log(param.get('id'));
      const id = param.get('id')
      this.editPostSubscription = this.store.select(getPostById , {id}).subscribe(data =>{
        this.editPost = data;
        console.log(this.editPost);
      })
    })
    this.updateForm = new FormGroup({
      title : new FormControl( this.editPost.title, [Validators.required , Validators.minLength(6)]),
      description : new FormControl(this.editPost.description , [Validators.required , Validators.minLength(8)])
    })
  }

  // !For Validation Function

  showTitle() : any{
    const titleError = this.updateForm.get('title');
    if(titleError?.touched && !titleError?.valid){
      if(titleError.errors?.['required']){
        return "This Field Is Required!"
      }

      if(titleError.errors?.['minLength']){
        return "Atleast minimum length should be 6"
      }
    }
  }

  showDescriptionError() : any{
    const showDescription = this.updateForm.get('description');
    if(showDescription?.touched && !showDescription?.valid){
      if(showDescription.errors?.['required']){
          return "This field is required!"
      }

      if(showDescription.errors?.['minLength']){
        return "This should have atlest length 6"
      }
    }
  }

  onUpdatePost(){
    if(!this.updateForm.valid){
      return ;
    }
    console.log(this.updateForm)
    

    const updatepost : Post = {
      id : this.editPost.id,
      title : this.updateForm?.value.title,
      description : this.updateForm?.value.description,
    }
    // TODO : Top Dispatch the action
    this.store.dispatch(updatePost({updatepost}) )
    this.route.navigate(['/post'])
  }

  ngOnDestroy():void{
    if(this.editPostSubscription){
       this.editPostSubscription.unsubscribe;
    }
  }

}
