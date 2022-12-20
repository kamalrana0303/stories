import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/product.service';
import { Product, ResolvedProduct } from 'src/app/model/product';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  title?: string;
  product:Product = new Product();
  error: Error | undefined;
  fg:FormGroup = this.fb.group({
    name: [],   
    productCode:[],
    description: [],
    title: []   ,
    offeredPrice: [],
    mrp:[],    
    rating:[],
    measurement: this.fb.group({
      length: [],
      height:[],
      breadth:[],
      weight:[]
    })
  })

  buildVideo():FormGroup{
    return this.fb.group({
      link: []
    })
  }
  buildImage():FormGroup{
    return this.fb.group({
      file: []
    })
  }

  
  constructor(private productService:ProductService,private router:Router, private activatedRoute:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data=> {
      const resolvedProduct:ResolvedProduct = data['product'];
      this.onProductRetrieved(resolvedProduct);
    })
  }

  onProductRetrieved(resolved:ResolvedProduct){
    this.title = resolved.title;
    if(resolved.product){
      this.product  = resolved.product;
    }
    this.error = resolved.error;
  }
  
  get images():FormArray{
    return <FormArray> this.fg.get("images");
  }


  save(){
    if(this.fg.valid){
      if(this.product?.productId){
        let value = {...this.product, ...this.fg.value}
        value.measurement.measurementId = this.product.measurement.measurementId;
        this.productService.editProduct(value).subscribe(product=>{
          this.router.navigate(["/console/admin/products"])
        })
      }
      else{
        let value = { ...this.fg.value}
        this.productService.addProduct(value).subscribe(product=> {
          this.router.navigate(["/console/admin/products"])
        })
      }
    }
  }
}