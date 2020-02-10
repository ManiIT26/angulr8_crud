import { Component, OnInit } from '@angular/core';
import {  FormControl,FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms'; 
// import { ProductsService } from '..products.service';  
// import { CommonService } from './service/common-service.service';

import { Observable } from 'rxjs'; 
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   LoginForm: FormGroup;
   public showErrorMessage = '';
   public showSuccMessage = '';

  
  constructor(private fb:FormBuilder, private myservice:CommonServiceService ) {

  

    this.LoginForm = this.fb.group({
      username:['', Validators.required],
      password:['', [Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    })

      
   }

   login_submit(LoginForm:NgForm){
     // console.log(this.LoginForm.value)

      if(this.LoginForm.valid){

        this.myservice.Login(this.LoginForm.value).then(data=>{
 
          if(data['status'] == 202 || data['status'] == 500){
              this.showErrorMessage = data['message'];
              this.showSuccMessage = '';
          }
          else{
            this.showSuccMessage = data['message'];
            this.showErrorMessage  = '';
            this.LoginForm.reset();
          }

          //console.log(data['status'],this.showErrorMessage,this.showSuccMessage);

        })
          
      }
      else{
          this.showErrorMessage = 'Please Enter Username and Password';
      }
   }

  ngOnInit() {
  }

   
}
