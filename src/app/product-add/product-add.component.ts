import { Component, OnInit } from '@angular/core';
import {  FormControl,FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import { ProductsService } from '../products.service';  
import { Observable } from 'rxjs'; 


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    ProductForm: FormGroup;

  constructor(private fb:FormBuilder,private apiService: ProductsService) {

      this.createForm();
   }

   createForm(){

    
      
        this.ProductForm = this.fb.group({
            product_name:['',Validators.required],
            product_desc:['',Validators.required],
            product_price:['',Validators.required]
        });

   }

   add_product(){
     //alert(this.ProductForm.invalid);

    let product_val = this.ProductForm.value;
    if(this.ProductForm.valid){ 
        this.apiService.Insertproduct(product_val).then((data)=>{
          console.log(data);
        })
     }

   // let product_val = this.ProductForm.value;

   /* this.apiService.Insertproduct(this.product_val)  
    .subscribe(data => console.log(data), error => console.log(error));   
*/
// this.apiService.Insertproduct(product_val).then((response) => {
//   console.log(response)
// });

    /*new HttpHeaders();
    header.append('abc','22');   */   
    //console.log(product_name,product_desc,product_price);
    //console.log(this.ProductForm.value);
  }

  ngOnInit() {
  }

}
