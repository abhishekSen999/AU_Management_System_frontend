import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private http: HttpClient) {}
  url: String = baseUrl;

  getCountForAllLocation() {
    return this.http.get(`${this.url}/manager/analytics/location`);
  }
}
