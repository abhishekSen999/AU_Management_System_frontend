import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { OnboardLogClass } from '../onboardLogClass';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(public logService: LogService) { }

  ngOnInit(): void {
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
      }

    );
  }

  searchAllLogByEmployeeId() {
    this.logListFlag = false;
    this.logService.getAllLogByEmployeeId(this.onboardLogPlaceholder.emp_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert("No Logs Found")
      }

    );
  }


  searchAllLogByDemandId() {
    this.logListFlag = false;
    this.logService.getAllLogByDemandId(this.onboardLogPlaceholder.dem_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert("No Logs Found")
      }

    );
  }


  searchAllLogByEmployeeIdAndDemandId() {
    this.logListFlag = false;
    this.logService.getAllLogByEmployeeIdAndDemandId(this.onboardLogPlaceholder.emp_id, this.onboardLogPlaceholder.dem_id).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert("No Logs Found")
      }

    );
  }






  searchAllLogByOperator() {
    this.logListFlag = false;
    this.logService.getAllLogByOperator(this.onboardLogPlaceholder.operator).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert("No Logs Found")
      }

    );
  }






  searchAllLogByOperation() {
    this.logListFlag = false;
    this.logService.getAllLogByOperation(this.onboardLogPlaceholder.operation).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert("No Logs Found")
      }

    );

  }




  searchAllLogBetweenDate() {
    this.logListFlag = false;
    this.logService.getAllLogBetweenDate(this.date1, this.date2).subscribe(
      (listOfLog) => {
        console.log(this.onboardLogList)
        this.logListFlag = true;
        this.onboardLogList = listOfLog;


      },
      (error) => {
        alert("No Logs Found")
      }

    );
  }



}
