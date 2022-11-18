import { Component, OnInit } from '@angular/core';
export interface AboutMe{
  heading: string;
  content: Content[];
  footer: Content[]
}
export interface Value{
  value:string | null | undefined;
  link: string | null | undefined;
}
export interface Image{
  src: string;
}
export interface Content{
  type: CONTENTTYPE,
  value: Value[]
}
export enum CONTENTTYPE{
  P="p",
  LI="li",
  H1="h1",
  IMG="img"
}
@Component({
  selector: 'my-self',
  templateUrl: './my-self.component.html',
  styleUrls: ['./my-self.component.scss']
})
export class MySelfComponent implements OnInit {
  aboutMe: AboutMe[] = [
    {
      heading: "Myself",
      content: [
        {
          type: CONTENTTYPE.P,
          value: [

            {
              value: "I am a fullstack Web Developer in Onelap Telematics pvt. ltd. And I've used spring & angular framework.",
              link: null
            }
          ]
        }
      ],
      footer:[]
    },
    {
      heading: "Project",
      content: [
        {
          type: CONTENTTYPE.LI,
          value: [
            {
              value: "Ecom Website (frontend & backend)",
              link:"http://www.onelap.in"
            },
            {
              value: "CRM (backend, access: private)",
              link: undefined
            }
            
          ]
        }
      ],
      footer:[]
    },
    {
      heading: "Skills",
      content: [
        {
          type: CONTENTTYPE.LI,
          value: [
            {value:"Angular", link:undefined},
            {value:"Springboot", link:undefined},
            {value: "Typescript",link:undefined},
            {value: "Html", link:undefined},
            {value:"css",link:undefined},
            {value:"tailwind",link:undefined}
          ]
        }
      ],
      footer:[{
        type:CONTENTTYPE.IMG,
        value:[{value:undefined, link:'/assets/angular.ico'}, 
        {value:undefined,link:'/assets/spring-png.png' }, 
        {value:undefined, link:'/assets/ts.png'},
        {value:undefined, link:'/assets/html5.png'},
        {value:undefined,link:'/assets/css3.png'},
        {value:undefined,link:"/assets/tailwind.png"}]
      }]
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
