import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ModalGroupComponent } from './modal-group/modal-group.component';
import { ProfilesComponentComponent } from './profiles-component/profiles-component.component';
import { ProxyComponentComponent } from './proxy-component/proxy-component.component';
import { SettingComponentComponent } from './setting-component/setting-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponentComponent
  }
  ,{
    path:'proxy',
    component:ProxyComponentComponent
  }
  ,{
    path:'tasks',
    component:TaskComponentComponent
  },{
    path:'profiles',
    component:ProfilesComponentComponent
  }
  ,{
    path:'settings',
    component:SettingComponentComponent
  },{
    path:'modal',
    component:ModalGroupComponent
      },{
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },{
    path: '**',
    component:HomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
