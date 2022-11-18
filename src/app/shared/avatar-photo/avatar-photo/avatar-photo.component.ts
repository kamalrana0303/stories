import { Component, Input, OnInit } from '@angular/core';
import { Avatar } from '../avatar-photo-list/avatar-photo-list.component';

@Component({
  selector: 'avatar-photo',
  templateUrl: './avatar-photo.component.html',
  styleUrls: ['./avatar-photo.component.scss']
})
export class AvatarPhotoComponent implements OnInit {
  @Input()
  name: string ='';
  @Input()
  avatar: Avatar | undefined = { img: undefined, srcset: []};
  constructor() { }

  ngOnInit() {
  }

}
