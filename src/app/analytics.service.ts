import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http:HttpClient) { }
  url:String ="http://localhost:8080"

  getCountForAllLocation(){

      return this.http.get(`${this.url}/manager/analytics/location`);
  }



}
