import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

// Aquí los metodos del servicio Categorias 

  getCategories(): Observable<any>{
    const url = 'http://localhost:30030/categories/getAll';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, {headers});
  }


  newCategory(category: any): void{
    const url = 'http://localhost:30030/categories/add';
    const body = category;
    const headers = new HttpHeaders()
    this.http.post(url, body, {headers}).subscribe();
  }


}
