import { identity } from "rxjs";

export class Policy {

    id: number;
    policyName: string;
    insuranceTye: string;
    ageLimit: string;
    premiumAmount:number;
    duration:number; 
    coverAmount:number;

    /**
     *
     */
    constructor() {
        this.id = 0;
        this.policyName = '';
        this.insuranceTye = '';
        this.ageLimit = '';
        this.premiumAmount=0;
        this.duration=0; 
        this.coverAmount=0;  
    }
}