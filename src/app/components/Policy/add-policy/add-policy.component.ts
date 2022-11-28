import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Policy } from 'src/app/Models/Policy.model';
import { PoliciesService } from 'src/app/Services/policies.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {
addPolicyRequest:Policy={
  id:0,
  policyName:'',
  insuranceTye:'',
  ageLimit:'',
  premiumAmount:0,
  duration:0,
  coverAmount:0

};
policy= new Policy();
constructor(private policyservice:PoliciesService,private router:Router){}

ngOnInit(): void {}

addPolicy(form:Policy){
 this.policyservice.addPolicy(this.addPolicyRequest).subscribe({

  next:(form) =>{
    this.router.navigate(['poli-list'])
  }
 })

  
}


// this.policyservice.addPolicy(form).subscribe((result)=>{
//   console.warn(result)
  
// })

// this.policy = form.value;
// //  this.addPolicyRequest.policyName = form.
//   this.policyservice.addPolicy(this.policy).subscribe({
//     next:(policy)=>{
//       console.log(policy);
//     },
    
//   error:(response)=>{
//     console.log(response);
//   }
  

//   })

}
