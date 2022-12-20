import { ErrorHandler, NgModule } from '@angular/core';
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
import { AddressesResolver } from './resolver/addresses-resolver';
import { AddressService } from './address.service';
import { ProductService } from './product.service';
import { GlobalHttpErrorHandlerInterceptor } from './error/global-http-error-handler.interceptor';
import { CustomErrorHandlerService } from './error/custom-error-handler.service';
import { MatSnackBarModule } from '@angular/material';
import { AddressResolver } from './resolver/address-resolver.service';
import { AddressCanDeactivateGuard } from './guard/address-deactivate.guard';
import { CommonFunctionalityComponent } from './common-functionality/common-functionality.component';

@NgModule({
  declarations: [CommonFunctionalityComponent],
  imports: [CommonModule, HttpClientModule, MatSnackBarModule],
  exports: [],
  providers: [
    AuthService,
    AddressService,
    ProductService,
    HeaderPostionService,
    AdminRouteGuard,
    UserRouteGuard,
    UserProfileService,
    UsernameDeactivateGuard,
    AddressCanDeactivateGuard,
    UsernameResolver,
    GenderResolver,
    DOBResolver,
    AddressesResolver,
    AddressResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: ErrorHandler, useClass: CustomErrorHandlerService
    // },
    // {
    //   provide:HTTP_INTERCEPTORS, useClass:GlobalHttpErrorHandlerInterceptor, multi:true
    // }
  ],
})
export class CoreModule {}
