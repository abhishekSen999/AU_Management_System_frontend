import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { OnboardService } from '../onboard.service';
import { OnboardClass } from '../onboardClass';
import { OnboardInterface } from '../OnboardInterface';
import { AuthorizationService } from '../authorization.service';

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
  
  constructor(public onboardService: OnboardService , public authorizationService : AuthorizationService) { }

  ngOnInit(): void {

    this.authorizationService.checkIfUserNeedsRelogin();
    

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
    
    
      this.onboardService.getAllOnboard().subscribe(
        (listOfOnboard)=>
        {
            this.listFlag=true;
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert(error.error.message);
        }
      );
  }

  searchByStartDate()
  {
    this.resetAllFlags();
    
    if(this.onboardPlaceHolder.start_date == null)
    {
        alert("Enter Requited Details");
        return;
    }
    
      this.onboardService.getAllOnboardByStartDate( this.onboardPlaceHolder.start_date ).subscribe(
        (listOfOnboard)=>
        {
            this.listFlag=true;
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert(error.error.message);
        }
      );
  }

  searchByEtaOfCompletion()
  {
    this.resetAllFlags();
    if(this.onboardPlaceHolder.eta_of_completion == null)
    {
        alert("Enter Requited Details");
        return;
    }
    
      this.onboardService.getAllOnboardByEtaOfCompletion( this.onboardPlaceHolder.eta_of_completion ).subscribe(
        (listOfOnboard)=>
        {
            this.listFlag=true;
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert(error.error.message);
        }
      );
  }


  searchByOnboardingStatus()
  {
    this.resetAllFlags();
    if(this.onboardPlaceHolder.onboarding_status == null)
    {
        alert("Enter Requited Details");
        return;
    }
    
      this.onboardService.getAllOnboardByOnboardingStatus( this.onboardPlaceHolder.onboarding_status ).subscribe(
        (listOfOnboard)=>
        {
          this.listFlag=true;
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert(error.error.message);
        }
      );
  }

  searchByBgcStatus()
  {
    this.resetAllFlags();
    if(this.onboardPlaceHolder.bgc_status == null)
    {
        alert("Enter Requited Details");
        return;
    }
    
      this.onboardService.getAllOnboardByBgcStatus( this.onboardPlaceHolder.bgc_status ).subscribe(
        (listOfOnboard)=>
        {
            this.listFlag=true;
            this.onboardList = listOfOnboard;
            console.log(this.onboardList);
        },
        (error)=>
        {
          this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert(error.error.message);
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
    
    this.onboardService.getOnboardById(this.onboardPlaceHolder.onb_id).subscribe(
      (onboard: OnboardInterface)=>{
        this.elementFlag=true
        this.onboardCommunication = onboard;
        console.log(this.onboardCommunication);
        
      },
      (error)=>{
        this.resetAllFlags();
        this.noOboardsPresentFlag=true;
        alert(error.error.message);
      })
  }

  searchByEmployeeAndDemand()
  {
    if(this.onboardPlaceHolder.emp_id == 0 || this.onboardPlaceHolder.dem_id == 0){
      alert("enter required details");
      return;
    }
    this.resetAllFlags();
    
    this.onboardService.getOnboardWithEmployeeIdAndDemandId(this.onboardPlaceHolder.emp_id,this.onboardPlaceHolder.dem_id).subscribe(
      (onboard: OnboardInterface)=>{
        this.elementFlag=true
        this.onboardCommunication = onboard;
        console.log(this.onboardCommunication);
        
      },
      (error)=>{
        this.resetAllFlags();
          this.noOboardsPresentFlag=true;
          alert(error.error.message);
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
       (error)=>{
          alert(error.error.message);
         this.operationFailedFlag=true;
        }
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
       (error)=>{
         alert(error.error.message);
         this.operationFailedFlag=true;
        }
     );

  }

  add(){
    this.resetAllFlags();
    if(this.onboardCommunication.start_date == null || this.onboardCommunication.eta_of_completion == null
         || this.onboardCommunication.bgc_status == null || this.onboardCommunication.dem_id == 0
         || this.onboardCommunication.emp_id == 0 || this.onboardCommunication.onboarding_status == null)
    {
        alert("Enter Requited Details");
        return;
    }


    this.addFlag=true;
     console.log(this.onboardCommunication.start_date);
     this.onboardService.addOnboard(this.onboardCommunication).subscribe(
       (data)=>{
          if(data==1)
            this.operationSuccessfulFlag=true;
          else
            this.operationFailedFlag=true;
            

       },
       (error)=>{
         console.log(error);
         alert(error.error.message);
         this.operationFailedFlag=true;
        }
     );
  }



}
