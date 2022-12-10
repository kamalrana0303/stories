import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsernameDeactivateGuard } from 'src/app/core/guard/username-deactivate.guard';
import { DOBResolver } from 'src/app/core/resolver/dob-resolver';
import { GenderResolver } from 'src/app/core/resolver/gender-resolver.service';
import { UsernameResolver } from 'src/app/core/resolver/username-resolver.service';
import { UserRouteGuard } from 'src/app/core/user-route.guard';
import { DobComponent } from './component/dob/dob.component';
import { GenderComponent } from './component/gender/gender.component';
import { MyAccountEditPageWithoutMenuComponent } from './my-account-edit-page-without-menu/my-account-edit-page-without-menu.component';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { MyHomeComponent } from './component/my-home/my-home.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { UserNameComponent } from './component/user-name/user-name.component';

const routes: Routes = [
 {
  path: '', component: MyAccountPageComponent, canActivateChild:[UserRouteGuard] ,children: [
    {
      path: 'home',  component: MyHomeComponent
    },
    {
      path: 'personal-info', component: PersonalInfoComponent
    },
    {
      path:'', redirectTo:'home', pathMatch:'full'
    }
  ],
  
 },
 {
  path: 'personal-info', component: MyAccountEditPageWithoutMenuComponent,canActivateChild: [UserRouteGuard],children:[
    {
      path: 'name', 
      canDeactivate:[UsernameDeactivateGuard] ,
      component: UserNameComponent , 
      resolve:{resolvedName: UsernameResolver}
    },
    {
      path:'gender',
      component: GenderComponent,
      resolve:{resolvedGender: GenderResolver}
    },
    {
      path:"dob",
      component: DobComponent,
      resolve: {resolvedDOB: DOBResolver}
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
