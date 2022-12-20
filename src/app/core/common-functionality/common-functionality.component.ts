import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-functionality',
  template: `
    
  `,
  styles: [
  ]
})
export class CommonFunctionalityComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  reloadComponent(self:boolean, urlNavigateTo?:string){
    const url = self ? this.router.url: urlNavigateTo;
    this.router.navigateByUrl('/', {skipLocationChange:true}).then(()=>{
      this.router.navigate([`/${url}`]).then(()=> {

      })
    })
  }

  reload(){
    window.location.reload();
  }

}
