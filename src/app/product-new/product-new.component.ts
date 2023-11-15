import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Products';
import { Category } from '../model/Category';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']

})

export class ProductNewComponent implements OnInit {
  product: Product = new Product();
  category: Category = new Category();
  active: string;

  categories: []; 

  constructor (private router: Router, private productsService: ProductsService, private categoriesService: CategoriesService  ) { }

  // llamada al método para mostrar las distintas categorias. 

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data =>{
      this.categories = data;
      //console.log(this.categories);
    }) 
       
  }
      
  newProduct(){
    if(this.active == "true"){
      this.product.active = true;

    }else{
      this.product.active = false;
    }

    const  product = {
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      active: this.product.active,
      date_added: this.product.date_added,
      category: this.category         

    }

 
    
    this.productsService.newProduct(product);
    this.navigateToHome(); 

  }
  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/products']);
  }

}
