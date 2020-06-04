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
  public noOboardsPresentFlag =false;

  resetAllFlags()
  {
    this.listFlag= false
    this.elementFlag= false;
    this.operationSuccessfulFlag=false;
    this.operationFailedFlag=false;
    this.addFlag=false;
    this.noOboardsPresentFlag =false;

  }
  
  constructor(public onboardService: OnboardService) { }

  ngOnInit(): void {
  }

  displayAdd()
  {
    this.resetAllFlags();
    this.addFlag=true;
  }

  // ################# list Result
  searchAll()
  {
    this.resetAllFlags();
    this.listFlag=true;
    
      this.onboardService.getAllOnboard().subscribe(
        (listOfOnboard)=>
        {
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert("No Onboards Found");
        }
      );
  }

  searchByStartDate()
  {
    this.resetAllFlags();
    this.listFlag=true;
    
      this.onboardService.getAllOnboardByStartDate( this.onboardPlaceHolder.start_date ).subscribe(
        (listOfOnboard)=>
        {
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert("No Onboards Found");
        }
      );
  }

  searchByEtaOfCompletion()
  {
    this.resetAllFlags();
    this.listFlag=true;
    
      this.onboardService.getAllOnboardByEtaOfCompletion( this.onboardPlaceHolder.eta_of_completion ).subscribe(
        (listOfOnboard)=>
        {
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert("No Onboards Found");
        }
      );
  }


  searchByOnboardingStatus()
  {
    this.resetAllFlags();
    this.listFlag=true;
    
      this.onboardService.getAllOnboardByOnboardingStatus( this.onboardPlaceHolder.onboarding_status ).subscribe(
        (listOfOnboard)=>
        {
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert("No Onboards Found");
        }
      );
  }

  searchByBgcStatus()
  {
    this.resetAllFlags();
    this.listFlag=true;
    
      this.onboardService.getAllOnboardByBgcStatus( this.onboardPlaceHolder.bgc_status ).subscribe(
        (listOfOnboard)=>
        {
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert("No Onboards Found");
        }
      );
  }



  // ########################### Element Result
  searchById()
  {
    if(this.onboardPlaceHolder.onb_id == 0){
      alert("enter required details");
      return;
    }
    this.resetAllFlags();
    this.elementFlag=true
    this.onboardService.getOnboardById(this.onboardPlaceHolder.onb_id).subscribe(
      (onboard: OnboardInterface)=>{
        this.onboardCommunication = onboard;
        console.log(this.onboardCommunication);
        
      },
      (error)=>{
        this.resetAllFlags();
        this.noOboardsPresentFlag=true;
        alert("No Onboards Found");
      })
  }

  searchByEmployeeAndDemand()
  {
    if(this.onboardPlaceHolder.emp_id == 0 || this.onboardPlaceHolder.dem_id == 0){
      alert("enter required details");
      return;
    }
    this.resetAllFlags();
    this.elementFlag=true
    this.onboardService.getOnboardWithEmployeeIdAndDemandId(this.onboardPlaceHolder.emp_id,this.onboardPlaceHolder.dem_id).subscribe(
      (onboard: OnboardInterface)=>{
        this.onboardCommunication = onboard;
        console.log(this.onboardCommunication);
        
      },
      (error)=>{
        this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert("No Onboards Found");
      })
  }


  saveAllChanges()
  {
    this.resetAllFlags();
    this.elementFlag=true;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.putOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       },
       (error)=>{this.operationFailedFlag=true;}
     );
  }

  delete()
  {
    this.resetAllFlags();
    this.elementFlag=true;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.deleteOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       },
       (error)=>{this.operationFailedFlag=true;}
     );

  }

  add(){
    this.resetAllFlags();
    this.addFlag=true;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.addOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       },
       (error)=>{this.operationFailedFlag=true;}
     );
  }



}
