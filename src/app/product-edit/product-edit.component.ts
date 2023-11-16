import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories: [];
  product: any;


  constructor(
    private productsService: ProductsService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private categoriesService: CategoriesService,
    //private datePipe: DatePipe 
    ) { }

  ngOnInit() {
     this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{ // recibe los datos proveniente de productos (nombre, stock, precio, etc.) 
     this.product = data;
    })

      this.categoriesService.getCategories().subscribe(data =>{  // recibe los datos proveniente de catagorias (enlatados, frescos, cereales. etc. )
      this.categories = data;
      //console.log(this.categories);
    })      

  } 

  updateProduct(): void{
    this.productsService.updateProduct(this.product);
    this.navigateProductDetail();

  }
  
  cancelUpdate(){
    this.navigateProductDetail();
  }

  navigateProductDetail(){
    this.router.navigate(['/product', this.route.snapshot.params['id']]);
   
  }
  
}
