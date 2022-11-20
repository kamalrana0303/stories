import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyStoryComponent } from './my-story/my-story.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WithMyHeaderComponent } from './body/with-my-header/with-my-header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {
    path:'', component: WithMyHeaderComponent, children:[
      {
        path:'', component: MyStoryComponent, pathMatch: 'full'
      },
      {
        path: 'home', component:HomeComponent
      },
      {
        path: 'form', loadChildren: ()=> import('./shared/form-control/form-control.module').then(m=>m.FormControlModule)
      }
    ]
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