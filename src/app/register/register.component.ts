import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators, NgForm } from '@angular/forms';
import { CommonServiceService } from '../service/common-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  public RegisterForm:FormGroup;
  public succMessage;
  public ErrMessage;

  constructor(private fb:FormBuilder,private myapi:CommonServiceService ) {

  //   this.RegisterForm = new FormGroup({
  //     username: new FormControl()
  //  });

    this.RegisterForm = this.fb.group({ 
      first_name:['',Validators.required],
      user_name:['',Validators.required],
      usr_mail:['',[Validators.required,Validators.email]],
      usr_mobile:['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[6-9]\d{9}$/)  ]],
      usr_type:['',Validators.required],
      new_password:['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      con_password:['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    }   
   // ,{validator: this.passwordConfirming}
    )

  }

//   passwordConfirming(c: AbstractControl): { invalid: boolean } {
//         if (c.get('password').value !== c.get('confirmPassword').value) {
//             return {invalid: true};
//         }
//     }


  register_userForm(RegisterForm:NgForm){
    console.log(this.RegisterForm.value['new_password'])

    if(this.RegisterForm.value['new_password'] != this.RegisterForm.value['con_password']){
      this.ErrMessage = 'PAssword Mismatch..!';
    }
    else if(this.RegisterForm.valid){
     
        this.myapi.CreateUSr(this.RegisterForm.value).then(data=>{
            console.log(data);
            if(data['status'] == '202'){
                this.ErrMessage = data['message'];
                this.succMessage = '';
            }
            else if(data['status'] == '500'){
                this.ErrMessage = data['message'];
                this.succMessage = '';
            }
            else{
                this.succMessage = data['message'];
                this.ErrMessage = '';
                this.RegisterForm.reset();
            }
        })
    }
    else{
        this.ErrMessage = 'Please Fill Valid Datas..!';
    }
  }
 

  ngOnInit() {
  }

}
