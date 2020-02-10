import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';  
import { promise } from 'protractor';
import { resolve } from 'url';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public uri = "http://10.10.0.180/ci_restAPI/"; 
  public httpOptions:any;
  constructor(public http:HttpClient) { 

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

    /*public async Edit_usr(usr_id:object):Promise<any>{
  		return new Promise(resolve=>{
  			
  			this.http.post(this.common_api+'common_api/ViewUsr',usr_id).subscribe(data=>{
  				resolve(data);
  			},err=>{
  				resolve(err);
  			})
  		})

  }*/

  /*Insertproduct(prodct_datas:object):Observable<any>{
    let headerss = new HttpHeaders({'Client-Service':'android-client','Auth-Key':'androidapi','Content-Type':'application/json; charset=utf-8'});
    let myParams = new URLSearchParams();

    return  this.http.post(this.uri+'auth/login',prodct_datas);	
  }*/

  

  public async Insertproduct(prodct_datas:object):Promise<any>{

    var prodct_datas1 = { "username":"mani","password":"Admin123$"    }

    return new Promise((resolve,reject)=>{
      //this.http.get('http://10.10.0.180/ci_restAPI/book',this.httpOptions).subscribe(data=>{
      this.http.post(this.uri+'auth/login',prodct_datas1,this.httpOptions).subscribe(data=>{
        
        resolve(data);
      },err=>{
        resolve(err);
      })
    })
  }

  /*Insertproduct(prodct_datas){
      return new Promise((resolve, reject) =>{
        resolve(prodct_datas);
      })

       
        
  }*/
}
