import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(){}

  ngOnInit():void{
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }


  // ! Validations Function
  showEmail() : any{
    const showEmailError = this.loginForm.get('email');
    if(showEmailError?.touched && !showEmailError?.valid){
      if(showEmailError.errors?.['required']){
        return "This Field is Required!"
      }

      if(showEmailError.errors?.['email']){
        return "Please enter a Valid Email"
      }
    }
  }

  showPassword():any{
    const showPasswordError = this.loginForm.get('password');
    if(showPasswordError?.touched && !showPasswordError.valid){
      if(showPasswordError.errors?.['required']){
        return "This Field is Required!"
      }

      if(showPasswordError.errors?.['password']){
        return "Enter a Valid Password"
      }
    }
  }

}
