import { identity } from "rxjs";

export class Policy{
    
    id:number;
    policyName:string;
    insuranceTye:string;
    ageLimit:string;
    minimumAmount:string;
    maximumAmount:string;
   
    /**
     *
     */
    constructor() {
         this.id =0;
         this.policyName = '';
         this.insuranceTye = '';
         this.ageLimit='';
         this.minimumAmount='';
        this.maximumAmount=''
        
    }
}