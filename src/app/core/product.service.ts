import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductImageRequest, ProductMeasurement, ProductMeasurementRequest, ProductRequest, ProductVideoRequest } from '../model/product';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {}

  uploadFile(file:File, productId:string){
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${environment.oauth2.apiRoot}product/image?productId+${productId}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.oauth2.apiRoot + "product");
  }

  getProduct(productId:any):Observable<Product> {
    let params:HttpParams = new HttpParams();
        params = params.append("productId", productId)
    return this.http.get<Product>(environment.oauth2.apiRoot + "product/id" ,{params: params})
  }

  addProduct(product:ProductRequest):Observable<Product>{
    return this.http.post<Product>(environment.oauth2.apiRoot + "product", product);
  }

  editProduct(product:Product):Observable<Product>{
    return this.http.patch<Product>(environment.oauth2.apiRoot + "product/edit", product);
  }

  addImage(productId:string, image: ProductImageRequest):Observable<Product>{
    const params = new HttpParams();
    params.append(productId,productId);
    return this.http.patch<Product>(environment.oauth2.apiRoot + "product/image", image , {params: params} );
  }

  removeImage(productId:string, imageId:string):Observable<Product>{
    const params = new HttpParams();
    params.append(productId,productId);
    params.append(imageId,imageId);
    return this.http.delete<Product>(environment.oauth2.apiRoot + "product/image" , {params:params})
  }

  addVideo(productId:string, video:ProductVideoRequest):Observable<Product>{
    const params = new HttpParams();
    params.append(productId, productId);
    return this.http.patch<Product>(environment.oauth2.apiRoot + "product/video",video, {params: params})
  }

  removeVideo(productId:string, videoId:string):Observable<Product>{
    const params = new HttpParams();
    params.append(productId, productId);
    params.append(videoId,videoId);
    return this.http.delete<Product>(environment.oauth2.apiRoot+ "product/video",{params: params});
  }

  editMeasurement(productId:string,  measurement:ProductMeasurement):Observable<Product>{
    const params = new HttpParams();
    params.append(productId, productId);
    return this.http.patch<Product>(environment.oauth2.apiRoot + "product/measurement",measurement, {params:params} )
  }
}
