import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/Models/Policy.model';
import { PoliciesService } from 'src/app/Services/policies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.component.html',
  styleUrls: ['./apply-policy.component.css']
})
export class ApplyPolicyComponent implements OnInit {
 applypolicy:Policy={
  id:0,
  policyName:'',
  insuranceTye:'',
  ageLimit:'',
  premiumAmount:0,
  duration:0,
  coverAmount:0
  

 };
  constructor(private route:ActivatedRoute,private policyservice:PoliciesService,private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
      const id=  params.get('id');

       if(id){
          this.policyservice.getPolicy(id).subscribe({
            next:(response) => {
                 this.applypolicy = response;
            }
          })
       }
      }
    })
  }
}
