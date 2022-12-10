import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { UserProfileService } from 'src/app/core/user-profile.service';
import { AuthContext } from 'src/app/model/auth-context';
import { Name, NameResolved } from 'src/app/model/name';
import { UserProfile } from 'src/app/model/user-profile';


@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {
  pageTitle: string ='Name Edit';
  errorMessage:string| undefined ;
  disabled:boolean =false;
  success:boolean =false;
  
  currentName: Name |any;
  private originalName: Name | undefined;

  get name():Name | undefined {
    return this.currentName;
  }

  set name(value: Name | undefined){
    this.currentName = value;  
    if(value){
      this.originalName = {...value}
    }
  }

  get isDirty():boolean{
    return JSON.stringify(this.originalName) !== JSON.stringify(this.currentName);
  }

  fg:FormGroup = this._fb.group({
    firstName: [,Validators.compose([Validators.required,Validators.min(2)])],
    lastName: [, Validators.required]
  })
  constructor(private _fb:FormBuilder,
    private userProfileService: UserProfileService,
    private authService:AuthService,
     private matIconRegistry:MatIconRegistry, 
     private domSanitizer:DomSanitizer,
     private router:Router,
     private route: ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=> {
      const resolvedData: NameResolved = data['resolvedName']
      this.errorMessage = resolvedData.error;
      this.onNameRetrieved(resolvedData.name)
      
    })
    this.matIconRegistry.addSvgIcon('backspace', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/backspace.svg`));
  }

  onNameRetrieved(name:Name | undefined){
    if(name){
      this.fg.patchValue({
        "firstName": name.firstName,
        "lastName":name.lastName
      })
    }
    this.name = name;
  }

  goBack(){
    this.router.navigateByUrl("account/personal-info")
  }

  save(){
    if(this.fg.valid){
      this.userProfileService.update(this.fg.value).pipe(switchMap((res)=>{
        return this.authService.loadSecurityContextObs()
      })).subscribe(res=>{
        this.success = true;
        this.router.navigate(['/account/personal-info'])
      })
    }
  }

  

  cancel(){
    this.fg.patchValue({...this.originalName})
  }

}
