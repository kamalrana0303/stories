import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SemanticVersioningComponent } from './semantic-versioning/semantic-versioning.component';
import { ScrollListenerDirective } from '../utils/scroll-listener.directive';
import { SpringMultiModuleProjectComponent } from './spring-multi-module-project/spring-multi-module-project.component';
import { AngularReactiveFormsComponent } from './angular-reactive-forms/angular-reactive-forms.component';


@NgModule({
  declarations: [SemanticVersioningComponent, ScrollListenerDirective, SpringMultiModuleProjectComponent, AngularReactiveFormsComponent],
  imports: [
    
    CommonModule,
    RouterModule.forChild([
      {
        path:'semantic-versioning', component: SemanticVersioningComponent
      },
      {
        path:"spring", component: SpringMultiModuleProjectComponent
      },
      {
        path:"angular", component: AngularReactiveFormsComponent
      }
    ])
  ]
})
export class MyBlogsModule { }
