import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, tap } from 'rxjs';
const URL='http://localhost:3000/products';

@Service()
export class ProductService {
    private readonly _http=inject(HttpClient);
    private readonly _products=signal<Product[]>([]);
    products=this._products.asReadonly();

    getproduct(): Observable<Product[]>{
        return this._http.get<Product[]>(URL)
        .pipe(tap(allproducts=>this._products.set(allproducts)));

    }

    addproduct(p:Product): Observable<Product>{ 
        return this._http.post<Product>(URL,p).pipe(
            tap(productadded=>
                this._products.update(produits=>[...produits, productadded])
            )
        );
       
    }
    
}
