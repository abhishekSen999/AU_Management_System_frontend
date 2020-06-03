import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { OnboardInterface } from './OnboardInterface';
import { OnboardComponent } from './onboard/onboard.component';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {  
  public url:String = "http://localhost:8080"

  constructor(public http: HttpClient) { }

  getOnboardById(onb_id)
  {
    // const getbyidurl=this.url+"/manager/onboard/id="+onb_id;
    return this.http.get(`${this.url}/manager/onboard/id=${onb_id}`);

    

  }

  getAllOnboard()
  {
    return this.http.get(`${this.url}/manager/onboard`);
  }


  putOnboard( onboard: OnboardInterface )
  {
    return this.http.put(`${this.url}/manager/onboard/`,onboard);
    
  }

  deleteOnboard( onboard: OnboardInterface )
  {
      return this.http.delete(`${this.url}/manager/onboard/id=${onboard.onb_id}`);
  }

  addOnboard(onboard: OnboardInterface)
  {
    return this.http.post(`${this.url}/manager/onboard/`,onboard);
  }





}