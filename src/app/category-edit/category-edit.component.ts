import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: any;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    
    ) { }

  ngOnInit() {
    this.category = this.categoriesService.getCategory(this.route.snapshot.params['id']).subscribe(data =>{
      this.category = data;
    });
  }

  updateCategory(): void{
    this.categoriesService.updateCategory(this.category);
    this.navigateCategoriesDetail();
  }

  navigateCategoriesDetail(){
    this.router.navigate(['/category', this.route.snapshot.params['id']])
  }

  cancelUpdate(){
    this.navigateCategoriesDetail();
  }

}
