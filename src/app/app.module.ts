import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoliListComponent } from './components/Policy/poli-list/poli-list.component';
import { AddPolicyComponent } from './components/Policy/add-policy/add-policy.component';
import { FormsModule } from '@angular/forms';
import { EditPolicyComponent } from './components/Policy/edit-policy/edit-policy.component';
import { DetailsPolicyComponent } from './components/Policy/details-policy/details-policy.component';
import { RouterOutlet } from '@angular/router';
import { ApplyPolicyComponent } from './components/Policy/apply-policy/apply-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    PoliListComponent,
    AddPolicyComponent,
    EditPolicyComponent,
    DetailsPolicyComponent,
    ApplyPolicyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
