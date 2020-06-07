import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-googlecharts',
  templateUrl: './googlecharts.component.html',
  styleUrls: ['./googlecharts.component.css']
})
export class GooglechartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dataPoints:[any];
  public chartColumns=[];
  public type="Column Chart";

  setDataPoints(dataPoints){
    this.dataPoints=dataPoints;
  }
  setChartColumns(columns)
  {
    // this.chartColumns.
  }
  





}
