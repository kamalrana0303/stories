import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ResolveData, Router } from '@angular/router';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { UserProfileService } from 'src/app/core/user-profile.service';
import { DOB, DOBResolved } from 'src/app/model/dob';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss']
})
export class DobComponent implements OnInit {
  startDate:Date = new Date();
  errorMessage:Error | undefined;
  orginalDob: DOB|any;
  currentDob :DOB|any ;
  fg:FormGroup = this.fb.group({
    dob: [,Validators.required]
  })
  constructor(private fb:FormBuilder,
    private authService:AuthService, 
    private userProfileService:UserProfileService,
    private route:ActivatedRoute,
    private router:Router,
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('backspace', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/backspace.svg`));
  
    this.route.data.subscribe(data=> {
      let resolvedDob:DOBResolved = data['resolvedDOB']
      if(resolvedDob.dob){
        this.dobRetrieved(resolvedDob.dob)
      }
      if(resolvedDob.error){
        this.errorMessage = resolvedDob.error;
      }
    })
  }

  get dob():DOB {
    return this.currentDob;
  }

  set dob(value: DOB ){
    this.currentDob = value;
    if(value){
      this.orginalDob = {...value};
    }
  }

  get isDirty():boolean {
    return JSON.stringify(this.currentDob) !== JSON.stringify(this.orginalDob)
  }

  dobRetrieved(dob:DOB){
    this.fg.patchValue({...dob})
    this.dob = dob;
  }

  cancel(){
    
  }

  availableDays(date:Date | null):boolean{
    if(date){
     return date > new Date('1900-01-01') && date < new Date();
    }
    return false;
  }

  save(){
    if(this.fg.valid){
      this.userProfileService.update(this.fg.value).pipe(catchError(error=> {
        this.errorMessage =error;
        return EMPTY
      })).pipe(switchMap(res=> {
        return this.authService.loadSecurityContextObs()
      })).subscribe(res=> {
        this.onSuccess()
      })
    }
  }

  onSuccess(){
    this.router.navigate(['/account/personal-info'])
  }

}
