import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { AvatarPhotoModule } from './shared/avatar-photo/avatar-photo.module';
import { MySelfComponent } from './my-self/my-self.component';
import { ContactMeModule } from './shared/contact-me/contact-me.module';
import { MyHeaderComponent } from './my-header/my-header.component';
import { WithMyHeaderAndFooterComponent } from './body/with-my-header-and-footer/with-my-header-and-footer.component';
import { BodyComponent } from './body/body.component';
import { CoreModule } from './core/core.module';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback/signout-redirect-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { SignUpModule } from './sign-up/sign-up.module';
import { WithMyHeaderComponent } from './body/with-my-header/with-my-header.component';

const customMoudles = [
  ContactMeModule,
  AvatarPhotoModule
]
const material=[
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MyStoryComponent,
    MySelfComponent,
    MyHeaderComponent,
    WithMyHeaderAndFooterComponent,
    BodyComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent,
    UnauthorizedComponent,
    WithMyHeaderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    customMoudles,
    material,
    BrowserAnimationsModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
