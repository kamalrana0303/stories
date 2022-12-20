import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';
import { Product, ResolvedProduct } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent{
  dataIsValid: {[key:string]:boolean} ={}
  product:Product | undefined;
  errorMessage:any | undefined;
  pageTitle:string | undefined;
  constructor(private productService: ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.route.data.subscribe(data=>{
      const resolvedData:ResolvedProduct = data['product'];
      this.errorMessage = resolvedData.error;
      if(resolvedData.product){
        this.onProductRetrieved(resolvedData.product)
      }
    })
  }

  onProductRetrieved(product:Product):void{
    this.product = product;
    if(!this.product){
      this.pageTitle = 'No product found';
    }
    else{
      if(this.product.productId == '0'){
        this.pageTitle = 'Add a new product';
      }
      else{
        this.pageTitle = `Edit Product: ${this.product.name}`
      }
    }
  }

  saveProduct(){
    if(this.product?.productId == '0'){
      this.productService.addProduct(this.product).pipe(catchError((error)=> {
        this.errorMessage = <any> error;
        return EMPTY;
      })).subscribe(()=> {
        this.onSaveComplete(`The new product ${this.product?.name} was saved`);
      })
    }else{
      if(this.product){
        this.productService.editProduct(this.product).pipe(catchError((error)=> {
          this.errorMessage = <any> error;
          return EMPTY;
        })).subscribe(()=> {
          this.onSaveComplete(`The updated ${this.product?.name} was saved`)
        })
      }
    }
  }

  onSaveComplete(msg:string){
    // create message service and add message to it
    this.router.navigate(['/console/admin/products'])
  }

  isValid(path?:string){
    this.validate();
    if(path){
      return this.dataIsValid[path]
    }
   console.log(this.dataIsValid)
    return Object.keys(this.dataIsValid).every(d => this.dataIsValid[d]===true)
  }

  validate():void{
    this.dataIsValid = {};
    if(this.product 
      && this.product.name 
      && this.product.name.length >3 
      && this.product.productCode
      && this.product.description
      && this.product.description.length > 3
      && this.product.measurement
      && this.product.offeredPrice
      && this.product.mrp
      && this.product.title
      ){
        this.dataIsValid['info'] = true;
    }else{
      this.dataIsValid['info'] = false;
    }

    // if(this.product
    //   && this.product.images
    //   && this.product.images.length >0){
    //     this.dataIsValid['images'] =true;
    //   }
    //   else{
    //     this.dataIsValid['images'] = false;
    //   }
  }

}
