import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-semantic-versioning',
  templateUrl: './semantic-versioning.component.html',
  styleUrls: ['./semantic-versioning.component.scss']
})
export class SemanticVersioningComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    
  }

  getNumberOfElement(elementId:any){
    let element = document.getElementById(elementId)
    if(element){
      return element.offsetTop
    }
    return 0;
  }

  scrollIntoView(id:string){
    let element = document.getElementById(id);
    if(element){
      window.scroll(0, element.offsetTop - 70)
    }
  }
   

}
