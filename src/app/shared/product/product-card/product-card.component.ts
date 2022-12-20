import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { UploadFileComponent } from '../../upload-file/upload-file/upload-file.component';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product:Product | undefined;

  overlayRef:OverlayRef | undefined;
  constructor(private router:Router, private _overlay:Overlay) { }

  ngOnInit(): void {
   
    if(this.product && this.product.productId == '0'){
        this.product.images.push({
          imageId: '0',
          link: '../../../../assets/svgs/add.svg'
        })

    }
    
  }
  editProduct(){
    this.router.navigate([this.router.url,this.product?.productId, "edit"])
  }
  uploadImage(){
    // this.overlayRef = this._overlay.create({
    //   positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
    //   hasBackdrop:true,
    //   panelClass: 'panelClass'
    // })
    // const componentPortal = new ComponentPortal(UploadFileComponent);
    // this.overlayRef.attach(componentPortal);
    // this.overlayRef.backdropClick().subscribe(()=> {
    //   this.overlayRef?.detach();
    // })

  }

}
