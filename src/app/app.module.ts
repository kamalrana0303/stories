import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { AvatarPhotoModule } from './shared/avatar-photo/avatar-photo.module';
import { MySelfComponent } from './my-self/my-self.component';
import { ContactMeModule } from './shared/contact-me/contact-me.module';
import { MyHeaderComponent } from './my-header/my-header.component';
import { WithMyHeaderComponent } from './body/with-my-header/with-my-header.component';
import { ControlsComponent } from './controls/controls.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
const customMoudles = [
  ContactMeModule,
  AvatarPhotoModule
]
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MyStoryComponent,
    MySelfComponent,
    MyHeaderComponent,
    WithMyHeaderComponent,
    ControlsComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    customMoudles
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
