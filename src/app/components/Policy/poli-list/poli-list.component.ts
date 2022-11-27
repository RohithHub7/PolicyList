import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/Models/Policy.model';
import { PoliciesService } from 'src/app/Services/policies.service';

@Component({
  selector: 'app-poli-list',
  templateUrl: './poli-list.component.html',
  styleUrls: ['./poli-list.component.css']
})
export class PoliListComponent implements OnInit {
  policylist:Policy[] =[];

constructor(private policiesservice:PoliciesService){}

ngOnInit(): void {
 this.policiesservice.getAllPolicies().subscribe({
  next:(policylist)=>{
    this.policylist=policylist;
  },
  error:(response)=>{
    console.log(response);
  }
  
 })
 
}
}
