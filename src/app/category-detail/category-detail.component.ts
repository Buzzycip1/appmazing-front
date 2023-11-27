import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../categories.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-category-detail",
  templateUrl: "./category-detail.component.html",
  styleUrls: ["./category-detail.component.css"],
})

export class CategoryDetailComponent implements OnInit {
  category: any;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.category = this.categoriesService.getCategory(this.route.snapshot.params["id"]).subscribe((data) =>{
        this.category = data;
      });
  }

  editCategory() {
    this.router.navigate(["/category/edit", this.route.snapshot.params["id"]]);
  }

  closeCategory() {
    this.router.navigate(["/categories"]);
  }
}
