import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ResolvedProduct } from 'src/app/model/product';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  product:Product| undefined;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data=> {
      const resolved:ResolvedProduct = data['product']
      this.product = resolved.product;
    })
  }

}
