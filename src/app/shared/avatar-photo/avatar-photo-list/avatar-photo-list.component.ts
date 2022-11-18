import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
export interface Source{
  path: string;
  media: string;
}
export interface Avatar{
   img:string | undefined;
   srcset:Source[]
}
@Component({
  selector: 'avatar-photo-list',
  templateUrl: './avatar-photo-list.component.html',
  styleUrls: ['./avatar-photo-list.component.scss']
})
export class AvatarPhotoListComponent implements OnInit {
  @Input()
  avatars: Avatar[] = []
  index:number = 0;
  constructor(private scroller:ViewportScroller) { }

  ngOnInit(): void {}

  previous(index:number){
    if(this.avatars.length > 0){
      let avatar = this.avatars.pop();
      if(avatar){
        this.avatars.splice(0,0, avatar);
      }
    }
    this.index = index - 1;
    if(this.index < 0){
      this.index = this.avatars.length - 1;
    }
    
  }

  next(index:number){
    let avatar = this.avatars.at(0);
    if(avatar){
      this.avatars.splice(0,1)
      this.avatars.push(avatar)
    }
    this.index = index + 1;
    if(this.index  > this.avatars.length - 1){
      this.index =0;
    }
  }
}
