import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Product, ResolvedProduct } from 'src/app/model/product';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ResolvedProduct> {
  constructor(private productService:ProductService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedProduct> {
    const id:any = route.paramMap.get("id");
    if(id == '0'){
      const p = new Product();
      p.productId = '0'
      return of( {
        title: 'Add new Product',
        product: p,
        error: undefined
      })
    }
    return this.productService.getProduct(id).pipe(map(x=> { 
      return {title: 'Edit Product',product: x, error:undefined}
    } ), catchError(error=> {
      return of({title: undefined,product:undefined, error: error})
    }));
  }
}
