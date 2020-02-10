import { Component } from '@angular/core';

import { NavigationCancel,  
  Event,  
         NavigationEnd,  
         NavigationError,  
         NavigationStart,  
         Router } from '@angular/router';  
import { CommonServiceService } from './service/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogged:boolean = false;
  constructor(private routes:Router, private myservice:CommonServiceService){

   /* private handleError (error: Response | any) {
      //Your other codes    
      
      if (error.status == 0){  
      this.routes.navigate(['/error']);
      }
      }*/

      
      window.addEventListener('storage', function(e){
        console.log(e);
      });

    setInterval(()=>{
     // console.log(sessionStorage.getItem('token'))
      if(sessionStorage.getItem('token')){
        this.isLogged = true;
      }
      else{
        this.isLogged = false;
      }
    },200)

    //this.myservice.isLogin;
    
    
  }

  


  logout(){
     sessionStorage.clear();
    this.routes.navigateByUrl('login')
  }

  title = 'Mani - Angular 8';
}


