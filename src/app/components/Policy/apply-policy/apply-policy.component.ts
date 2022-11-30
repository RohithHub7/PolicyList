import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/Models/Policy.model';
import { PoliciesService } from 'src/app/Services/policies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyHolder } from 'src/app/Models/PolicyHolder.model';
import { PolicyholdersService } from 'src/app/Services/policyholders.service';

@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.component.html',
  styleUrls: ['./apply-policy.component.css']
})
export class ApplyPolicyComponent implements OnInit {
  addPolicyHolderRequest:PolicyHolder={
 
  holderId: 0,
  userId: 0,
  applicantName: '',
  nominee: '',
  age: '',
  phoneNumber:''

 };
policy= new PolicyHolder();

  constructor(private route:ActivatedRoute,private policyholderservice:PolicyholdersService,private router:Router){}
  ngOnInit(): void {}


  addPolicyHolder(form:PolicyHolder)
  {
      this.policyholderservice.addPolicyHolder(this.addPolicyHolderRequest).subscribe({

        next:(form) =>{
          this.router.navigate(['poli-list'])
        }
       })

  }
}
