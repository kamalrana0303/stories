import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar-photo/avatar-photo-list/avatar-photo-list.component';
import {Content, CONTENTTYPE} from '../my-self/my-self.component'
@Component({
  selector: 'my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.scss']
})
export class MyStoryComponent implements OnInit {
  showMore:boolean = false;
  avatar:Avatar = {
    img: '/assets/images/my-self/avatar-1.jpeg',
    srcset: [{path:'/assets/avatar-1.jpeg', media: '(min-width: 650px)'},
    {path:'/assets/avatar-1.jpeg', media:'(min-width: 400px)'}],
  }
  selectedAvatarIndex:number = 0;
  avatars: Avatar[] = [
  
   
    {
      img: '/assets/images/my-self/india-gate.jpeg',
      srcset: []
    },
    {
      img: '/assets/images/my-self/uk.jpeg',
      srcset:[]
    }
    
  ]
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit() {
  }

  selectAvatar(index:number){
      this.selectedAvatarIndex = index;
     
  }

}


