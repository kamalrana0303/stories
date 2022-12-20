export class ProductRequest{
    name?:string;        
    productCode?:string; 
    description?:string; 
    title?:string;       
    offeredPrice?:number;
    mrp?:number;         
    rating?:number;  
    images: ProductImageRequest[] =[];     
    videos: ProductVideoRequest[]=[];     
    measurement?:ProductMeasurementRequest;    
}

export class ProductImageRequest{
    link?:string;
    data?:File;
}
export class ProductVideoRequest{
    link?:string;
}
export class ProductMeasurementRequest{
    length?:number;
    height?:number;
    breadth?:number;
    weight?:number;
}

export class Product{
    name?:string; 
    productId?:string;       
    productCode?:string; 
    description?:string; 
    title?:string;       
    offeredPrice?:number;
    mrp?:number;         
    rating?:number;  
    images: ProductImage[] =[];     
    videos: ProductVideo[]=[];     
    measurement:ProductMeasurement = new ProductMeasurement(); 
}


export class ProductImage{
    imageId?:string;
    link?:string;
    data?:File
}

export class ProductVideo{
    videoId?:string;
    link?:string;
}
export class ProductMeasurement{
    measurementId?:string;
    length?:number;
    height?:number;
    breadth?:number;
    weight?:number;
}

export class ResolvedProduct{
    title?: string ;
    product?: Product;
    error?:any;
}