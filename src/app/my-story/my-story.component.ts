import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar-photo/avatar-photo-list/avatar-photo-list.component';

@Component({
  selector: 'my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.scss']
})
export class MyStoryComponent implements OnInit {
  showMore:boolean = false;
  avatar:Avatar = {
    img: '/assets/avatar-1.jpeg',
    srcset: [{path:'/assets/avatar-1.jpeg', media: '(min-width: 650px)'},
    {path:'/assets/avatar-1.jpeg', media:'(min-width: 400px)'}]
  }
  avatars: Avatar[] = [
    {
      img: '/assets/avatar-1.jpeg',
      srcset: []
    },
    
    {
      img: '/assets/avatar-2.jpg',
      srcset:[]
    },
    {
      img: '/assets/avatar-1.jpeg',
      srcset: []
    },
    
    {
      img: '/assets/avatar-2.jpg',
      srcset:[]
    },
    {
      img: '/assets/avatar-1.jpeg',
      srcset: []
    },
    
    {
      img: '/assets/avatar-2.jpg',
      srcset:[]
    },
    {
      img: '/assets/avatar-1.jpeg',
      srcset: []
    },
    
    {
      img: '/assets/avatar-2.jpg',
      srcset:[]
    },
   
  ]
  constructor() { }

  ngOnInit() {
  }

}


