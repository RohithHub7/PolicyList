import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Policy} from '../Models/Policy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private http:HttpClient) { }

 apiurl:string="https://localhost:44398";

  getAllPolicies():Observable<Policy[]>
  {
    return this.http.get<Policy[]>(this.apiurl + '/api/Policy')
  }

  addPolicy(addPolicyRequest:Policy):Observable<Policy>{
    // console.log(addPolicyRequest);
    // console.log("Inside service " + addPolicyRequest);
    return this.http.post<Policy>(this.apiurl + '/api/Policy',addPolicyRequest);
  }
  getPolicy(id:any):Observable<Policy> {
   return this.http.get<Policy>(this.apiurl + '/api/Policy/' + id);
  }
  updatePolicy(id:any,updatePolicy:Policy):Observable<Policy>{
    return this.http.put<Policy>(this.apiurl + '/api/Policy/' + id,updatePolicy);

  }

  deletePolicy(id:number):Observable<Policy>{
   return this.http.delete<Policy>(this.apiurl + '/api/Policy/' + id);
  }
  
}
