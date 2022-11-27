import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './components/Policy/add-policy/add-policy.component';
import { ApplyPolicyComponent } from './components/Policy/apply-policy/apply-policy.component';
import { DetailsPolicyComponent } from './components/Policy/details-policy/details-policy.component';
import { EditPolicyComponent } from './components/Policy/edit-policy/edit-policy.component';
import { PoliListComponent } from './components/Policy/poli-list/poli-list.component';

const routes: Routes = [
  //Home
  {
    path:'',
    component:PoliListComponent
  },
  // Path to Display PolicyList 
  {
    path:'poli-list',
    component:PoliListComponent
  },
  //Path to AddPolicy For Admin
  {
    path:'PolicyList/add',
    component:AddPolicyComponent
  },
  //Path to EditPolicy
  {
    path:'PolicyList/edit/:id',
    component:EditPolicyComponent
  },
  //Path to Display 
  {
    path:'PolicyList/details/:id',component:DetailsPolicyComponent
  },
  //Path to apply-policy component
  {
    path:'PolicyList/apply/:id',component:ApplyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
