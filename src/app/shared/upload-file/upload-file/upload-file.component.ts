import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/product.service';
import { Product, ProductImage } from 'src/app/model/product';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  @Input()
  product: Product | undefined;
  selectedFiles: File[] = [];
  selectedFileNames: any[] = [];
  previews: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  selectFile(event: any) {
    
    this.selectedFiles = event.target.files;
    if (event.target.files.length > 0) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
      if (this.product && this.product.productId) {
        this.productService.uploadFile(event.target.files[0], this.product.productId)
          .subscribe(() => {});
      }
    }
  }

  
}
/**
 * We use FileReader with readAsDataURL() method to get the image preview URL and put it into previews array. This method produces data as a data: URL representing the file’s data as a base64 encoded string. The URL life is tied to the document in the window on which it was created.

Also use selectedFiles array for accessing current selected Files.

Now we iterate over the selected Files above and call upload() method on each file item.
 */
