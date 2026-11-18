import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly productservice=inject(ProductService);
  products=this.productservice.products;
  ngOnInit(): void{
    this.productservice.getproduct().subscribe();
  }
  onaddproduct(){
    let newproduct={id: "xyDSI", name: "crayon", price: 2.3 }
    this.productservice.addproduct(newproduct).subscribe();
  }
}
