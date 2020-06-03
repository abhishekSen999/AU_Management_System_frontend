import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { OnboardService } from '../onboard.service';
import { OnboardClass } from '../onboardClass';
import { OnboardInterface } from '../OnboardInterface';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {
  

  public onboardPlaceHolder:OnboardClass={
      onb_id: 0,
      emp_id: 0,
      dem_id: 0,
      start_date: null,
      eta_of_completion: null,
      bgc_status: null,
      onboarding_status: null,
      
  };
  // public onboardId:int;
  // public demandId:int;
  // public employeeId:int;

  public onboardCommunication: OnboardClass={
    onb_id: 0,
    emp_id: 0,
    dem_id: 0,
    start_date: null,
    eta_of_completion: null,
    bgc_status: null,
    onboarding_status: null,
    
};
  public onboardList : any;
  public listFlag:boolean = false;
  public elementFlag: boolean = false;
  public operationSuccessfulFlag=false;
  public operationFailedFlag=false;
  public addFlag=false;

  constructor(public onboardService: OnboardService) { }

  ngOnInit(): void {
  }

  displayAdd()
  {
    this.addFlag=true;
  }
  searchAll()
  {
    this.addFlag=false;
    this.elementFlag=false;
    this.listFlag=true;
    
      this.onboardService.getAllOnboard().subscribe(
        (listOfOnboard)=>
        {
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        }
      )
  }

  searchById()
  {
    this.addFlag=false;
    this.listFlag=false
    this.elementFlag=true
    this.onboardService.getOnboardById(this.onboardPlaceHolder.onb_id).subscribe(
      (onboard: OnboardInterface)=>{
        this.onboardCommunication = onboard;
        console.log(this.onboardCommunication);
        
      },
      (error)=>{})
  }

  searchByEmployeeAndDemand()
  {
      this.addFlag=false;
      this.listFlag=false;
      this.elementFlag=true;
      console.log("searchby employee and demand");
  }


  saveAllChanges()
  {
    this.operationSuccessfulFlag =false;
    this.operationFailedFlag=false;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.putOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       }
     );
  }

  delete()
  {
    this.operationSuccessfulFlag =false;
    this.operationFailedFlag=false;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.deleteOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       }
     );

  }

  add(){
    this.operationSuccessfulFlag =false;
    this.operationFailedFlag=false;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.addOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       }
     );
  }



}
