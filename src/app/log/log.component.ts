import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { OnboardLogClass } from '../onboardLogClass';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(public logService: LogService, public authorizationService : AuthorizationService) { }

  ngOnInit(): void {
    this.authorizationService.checkIfUserNeedsRelogin();

  }

  public onboardLogList: any;

  public logListFlag: boolean = false;

  public date1:Date;
  public date2:Date;

  public onboardLogPlaceholder: OnboardLogClass = {
    log_id: 0,
    timestamp: null,
    operator: null,
    operation: null,
    onb_id: 0,
    emp_id: 0,
    dem_id: 0,
    start_date: null,
    eta_of_completion: null,
    bgc_status: null,
    onboarding_status: null



  }


  searchAllLog() {
    this.logListFlag = false;
    this.logService.getAllLog().subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message);
      }

    );
  }

  searchAllLogByEmployeeId() {
    this.logListFlag = false;
    if(this.onboardLogPlaceholder.emp_id == 0)
    {
      alert("enter required details");
      return;
    }


    this.logService.getAllLogByEmployeeId(this.onboardLogPlaceholder.emp_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message)
      }

    );
  }


  searchAllLogByDemandId() {
    this.logListFlag = false;
    if(this.onboardLogPlaceholder.dem_id == 0)
    {
      alert("enter required details");
      return;
    }

    this.logService.getAllLogByDemandId(this.onboardLogPlaceholder.dem_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message)
      }

    );
  }

  searchAllLogByOnboardId() {
    this.logListFlag = false;
    if(this.onboardLogPlaceholder.onb_id == 0)
    {
      alert("enter required details");
      return;
    }
    this.logService.getAllLogByOnboardId(this.onboardLogPlaceholder.onb_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message)
      }

    );
  }






  searchAllLogByEmployeeIdAndDemandId() {
    this.logListFlag = false;
    if(this.onboardLogPlaceholder.emp_id == 0 || this.onboardLogPlaceholder.dem_id == 0 )
    {
      alert("enter required details");
      return;
    }


    this.logService.getAllLogByEmployeeIdAndDemandId(this.onboardLogPlaceholder.emp_id, this.onboardLogPlaceholder.dem_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message)
      }

    );
  }






  searchAllLogByOperator() {
    this.logListFlag = false;
    if(this.onboardLogPlaceholder.operator == null)
    {
      alert("enter required details");
      return;
    }

    this.logService.getAllLogByOperator(this.onboardLogPlaceholder.operator).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message)
      }

    );
  }






  searchAllLogByOperation() {
    this.logListFlag = false;
    if(this.onboardLogPlaceholder.operation == null)
    {
      alert("enter required details");
      return;
    }

    this.logService.getAllLogByOperation(this.onboardLogPlaceholder.operation).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message);
        
      }

    );

  }




  searchAllLogBetweenDate() {
    this.logListFlag = false;
    if(this.date1 == null || this.date2 == null)
    {
      alert("enter required details");
      return;
    }
    this.logService.getAllLogBetweenDate(this.date1, this.date2).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert(error.error.message)
      }

    );
  }



}
