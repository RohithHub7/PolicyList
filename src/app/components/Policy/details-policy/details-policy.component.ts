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
  
  policydetails:Policy={
  id:0,
  policyName:'',
  insuranceTye:'',
  ageLimit:'',
  minimumAmount:'',
  maximumAmount:''

};
  constructor(private route:ActivatedRoute,private policyservice:PoliciesService,private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
      const id=  params.get('id');

       if(id){
          this.policyservice.getPolicy(id).subscribe({
            next:(response) => {
                 this.policydetails = response;
            }
          })
       }
      }
    })
  }

  
  updatePolicy(){
    this.policyservice.updatePolicy(this.policydetails.id,this.policydetails).subscribe({
      next:(response)=>{
           this.router.navigate(['poli-list']);
      }
    })

  }

  deletePolicy(id:number){
    this.policyservice.deletePolicy(id).subscribe({
      next:(response)=>{
        this.router.navigate(['poli-list']);
      }
    })
  }
}
