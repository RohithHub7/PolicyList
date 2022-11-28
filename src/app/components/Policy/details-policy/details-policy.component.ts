import { Component, OnInit } from '@angular/core';
import { PoliciesService } from 'src/app/Services/policies.service';
import { Policy } from 'src/app/Models/Policy.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-policy',
  templateUrl: './details-policy.component.html',
  styleUrls: ['./details-policy.component.css']
})
export class DetailsPolicyComponent implements OnInit {


  policylist:Policy ={
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
                 this.policylist = response;
            }
          })
       }
      }
    })
  }

  // updatePolicy(){
  //   this.policyservice.updatePolicy(this.policylist.id,this.policylist).subscribe({
  //     next:(response)=>{
  //          this.router.navigate(['poli-list']);
  //     }
  //   })

  // }
}