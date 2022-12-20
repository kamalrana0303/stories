import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  newProduct = new Product();
  products: Product[] = [
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
   new Product(),
  ];
  constructor(private activatedRoute:ActivatedRoute) {
    this.newProduct.productId = '0';

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=> {
      this.products = data['resolvedProducts']
    })
  }
}
