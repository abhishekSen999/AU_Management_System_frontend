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

  getAllOnboardByStartDate(start_date)
  {
    return this.http.get(`${this.url}/manager/onboard/start_date=${start_date}`);
  }

  getAllOnboardByEtaOfCompletion(eta_of_completion)
  {
    return this.http.get(`${this.url}/manager/onboard/eta_of_completion=${eta_of_completion}`);
  }

  getAllOnboardByOnboardingStatus(onboarding_status)
  {
    return this.http.get(`${this.url}/manager/onboard/onboarding_status=${onboarding_status}`);
  }
  getAllOnboardByBgcStatus(bgc_status)
  {
    return this.http.get(`${this.url}/manager/onboard/bgc_status=${bgc_status}`);
  }






  getOnboardWithEmployeeIdAndDemandId(emp_id , dem_id)
  {
    return this.http.get(`${this.url}/manager/onboard/emp_id=${emp_id}&dem_id=${dem_id}`);
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
