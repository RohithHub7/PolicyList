import { identity } from "rxjs";

export class Policy {

    id: number;
    policyName: string;
    insuranceTye: string;
    ageLimit: string;
    minimumAmount: number;
    maximumAmount: number;
    minDuration: number;
    maxDuration:number;


    /**
     *
     */
    constructor() {
        this.id = 0;
        this.policyName = '';
        this.insuranceTye = '';
        this.ageLimit = '';
        this.minimumAmount = 0;
        this.maximumAmount = 0;
        this.minDuration = 0;
        this.maxDuration = 0;


    }
}