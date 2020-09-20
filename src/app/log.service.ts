import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor(public http: HttpClient) {}

  public url: String = baseUrl;

  getAllLog() {
    return this.http.get(`${this.url}/manager/log`);
  }

  getAllLogByEmployeeId(emp_id) {
    return this.http.get(`${this.url}/manager/log/emp_id=${emp_id}`);
  }

  getAllLogByOnboardId(onb_id) {
    return this.http.get(`${this.url}/manager/log/onb_id=${onb_id}`);
  }

  getAllLogByDemandId(dem_id) {
    return this.http.get(`${this.url}/manager/log/dem_id=${dem_id}`);
  }

  getAllLogByEmployeeIdAndDemandId(emp_id, dem_id) {
    return this.http.get(
      `${this.url}/manager/log/both/emp_id=${emp_id}&dem_id=${dem_id}`
    );
  }

  getAllLogByOperator(operator) {
    return this.http.get(`${this.url}/manager/log/operator=${operator}`);
  }

  getAllLogByOperation(operation) {
    return this.http.get(`${this.url}/manager/log/operation=${operation}`);
  }

  getAllLogBetweenDate(date1, date2) {
    return this.http.get(
      `${this.url}/manager/log/date1=${date1}&date2=${date2}`
    );
  }
}
