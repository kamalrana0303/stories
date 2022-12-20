import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyStoryComponent } from './my-story/my-story.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WithMyHeaderAndFooterComponent } from './body/with-my-header-and-footer/with-my-header-and-footer.component';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback/signout-redirect-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WithMyHeaderComponent } from './body/with-my-header/with-my-header.component';


const routes: Routes = [  
  {
    path:'', component: WithMyHeaderAndFooterComponent, children:[
      {
        path:'', component: MyStoryComponent, pathMatch: 'full'
      },
      {
        path:'blog', loadChildren: ()=> import('./my-blogs/my-blogs.module').then(m=> m.MyBlogsModule)
      },
      
    ]
  },
  { 
    path: '', component:WithMyHeaderComponent, children: [
      {
        path: 'account', loadChildren: ()=> import('./shared/my-account/my-account.module').then(m=>m.MyAccountModule)
      },
      {
        path: 'console', loadChildren: ()=> import('./shared/console-management/console-management.module').then(m=>m.ConsoleManagementModule)
      }
    ]
  },
  {
    path: 'sign-up', component: SignUpComponent
  },  
  {
    path:"signin-callback", component:SigninRedirectCallbackComponent
  },
  {
    path:"signout-callback", component: SignoutRedirectCallbackComponent
  },  
  {
    path:"unauthorized", component: UnauthorizedComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }