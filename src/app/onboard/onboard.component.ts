import { Component, OnInit } from '@angular/core';
import {OnboardClass } from '../onboardClass'
@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  onboardObject : OnboardClass ={
    onb_id: 0,
    emp_id: 0,
    dem_id: 0,
    start_date: null,
    eta_of_completion: null,
    bgc_status: null,
    onboarding_status: null
  }
  constructor() { }

  ngOnInit(): void {
  }

}
