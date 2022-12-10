import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account-edit-page-without-menu',
  templateUrl: './my-account-edit-page-without-menu.component.html',
  styleUrls: ['./my-account-edit-page-without-menu.component.scss']
})
export class MyAccountEditPageWithoutMenuComponent implements OnInit {
  private dataIsValid:{[key:string]:boolean} ={}
  constructor() { }

  ngOnInit(): void {
  }

  isValid(path?:string){
    this.validate();
    if(path){
      return this.dataIsValid[path];
    }
    return (this.dataIsValid && Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true))
  }

  validate():void{
    //validate info
    //this.dataIsValid['info']=true or false
    //validate tags
    //this.dataIsValid['tags']=true or false
  }

}
