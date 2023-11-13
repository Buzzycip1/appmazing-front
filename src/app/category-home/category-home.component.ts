import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  
  categories: any = [];

  constructor(private categoriesService: CategoriesService, private router: Router) { };

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data =>{
      this.categories = data;
    })
  }  

  openDetailForm(row: any){
    this.router.navigate(['/category', row.id]);
  }

  displayedColumns: string[] = ['id', 'name'];

}

