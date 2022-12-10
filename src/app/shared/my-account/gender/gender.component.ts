import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { UserProfileService } from 'src/app/core/user-profile.service';
import { Error } from 'src/app/model/error';
import { Gender, GENDEREnum, GenderResolved } from 'src/app/model/gender';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  fg:FormGroup = this.fb.group({
    "gender":[,Validators.compose([Validators.required])]
  })
  GENDEREnum:typeof GENDEREnum = GENDEREnum
  currentGender?:  any;
  originalGender?: Gender;
  errorMessage?: Error;
  constructor(private userProfileService:UserProfileService,
    private fb:FormBuilder,
    private route:ActivatedRoute, 
    private authService:AuthService,
    private matIconRegistry:MatIconRegistry, 
    private domSanitizer:DomSanitizer,
    private router:Router) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('backspace', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/backspace.svg`));
  
    this.route.data.subscribe(data=>{
      let gender:GenderResolved = data['resolvedGender'];
      this.onGenderRetrieved(gender.gender);
      
    })
  }

  onGenderRetrieved(value:Gender|undefined){
    if(value){
      this.fg.patchValue({...value});
    }
    this.gender = value;
  }

  get gender(): Gender|undefined{
    return this.currentGender;
  }
  set gender(value:Gender|undefined){
    this.originalGender = {...value};
    this.currentGender = value;
  }

  get isDirty(){
    return JSON.stringify(this.currentGender) !== JSON.stringify(this.originalGender);
  }

  cancel(){
    this.fg.patchValue({...this.originalGender})
  }

  save(){
    if(this.fg.valid){
      this.userProfileService.update(this.currentGender).pipe(catchError((error:Error)=>{
        this.errorMessage = error;
        return EMPTY;
      })).pipe(switchMap((res)=>{
        return this.authService.loadSecurityContextObs()
      })).subscribe((res)=>{
      
        this.router.navigate(['/account/personal-info']);
      })
    }
    
  }
}
