import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPhotoComponent } from './avatar-photo/avatar-photo.component';
import { AvatarPhotoListComponent } from './avatar-photo-list/avatar-photo-list.component';



@NgModule({
  declarations: [AvatarPhotoComponent, AvatarPhotoListComponent],
  imports: [
    CommonModule
  ],
  exports: [AvatarPhotoComponent, AvatarPhotoListComponent]
})
export class AvatarPhotoModule { }
