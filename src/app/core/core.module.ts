import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { HeaderPostionService } from './header-position.service';
import { AdminRouteGuard } from './admin-route.guard';
import { UserRouteGuard } from './user-route.guard';
import { UserProfileService } from './user-profile.service';
import { UsernameDeactivateGuard } from './guard/username-deactivate.guard';
import { UsernameResolver } from './resolver/username-resolver.service';
import { GenderResolver } from './resolver/gender-resolver.service';
import { DOBResolver } from './resolver/dob-resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[],
  providers:[
    AuthService,
    HeaderPostionService,
    AdminRouteGuard,
    UserRouteGuard,
    UserProfileService,
    UsernameDeactivateGuard,
    UsernameResolver,
    GenderResolver,
    DOBResolver,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    }
  ]
})
export class CoreModule { }
