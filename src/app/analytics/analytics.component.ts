import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { AuthorizationService } from '../authorization.service';
// import { GoogleChartsModule, GoogleChartComponent } from 'angular-google-charts';


// import * as CanvasJS  from "canvasjs"
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  ngOnInit(): void {
    this.authorizationService.checkIfUserNeedsRelogin();
  }

  

 

  constructor(private analyticsService : AnalyticsService,public authorizationService : AuthorizationService) { }
  
  public title = 'Angular Charts';

  
  public dataPoints:[any];
  public type="ColumnChart";
  public chartColumns=[];

  
  




  drawColumnGraph(title,myDataPoints)
  {
    // let chart = new CanvasJS .Chart("chartContainer", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Basic Column Chart in Angular"
    //   },
    //   data: [{ 
    //     type: "column",
    //     dataPoints:myDataPoints
    //   }]
    // });
  }



  locationAnalytics()
  {
    this.analyticsService.getCountForAllLocation().subscribe(
      (data:[any])=>{
        this.dataPoints=[[]];
        data.forEach(element => {
          let location: String= element.location;
          let count: Number = element.count;
          this.dataPoints.push([location,count])
        });
        this.dataPoints.splice(0,1);
        console.log(this.dataPoints);
        // this.googlecharts
      }
    );


  }


  

}
