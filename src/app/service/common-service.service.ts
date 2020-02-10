import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';  
import { promise } from 'protractor';
import { resolve } from 'url';
import { Observable,throwError } from 'rxjs'; 
import { Router } from '@angular/router';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public uri = "http://10.10.0.180/ci_restAPI/"; 
  public httpOptions:any;

  constructor(private http:HttpClient,private routes:Router) { 

    this.httpOptions = {
      headers: new HttpHeaders({
        'Client-Service':'android-client',       
       'Auth-Key':'androidapi',
       'Content-Type':'application/json',
       /*'user-ID':'2',
       'Authorization':'Jjknjkn34bdfjknsdfji834io'  */
     })
    }

  }

  public async Login(loginData:object):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.post(this.uri+'auth/login',loginData,this.httpOptions).subscribe(data=>{
        
        resolve(data);
        if(data['token']){
          sessionStorage.setItem('token',data['token']);
          this.routes.navigateByUrl('register');
        } 
      },err=>{
        resolve(err)
      })
    }) 

  }

  

  isLogin(){  

    var get_token = sessionStorage.getItem('token');

    console.log(get_token);

    if(get_token == '' || get_token == null || get_token == undefined){
      return false;
    }
    else{
      return true;
    }
  }

  public async CreateUSr(register_data:object):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.post(this.uri+'auth/user_create',register_data,this.httpOptions).subscribe(data=>{
        resolve(data);
      })
    })
  }

}
