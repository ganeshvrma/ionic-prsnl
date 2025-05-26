// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://ek-reps.com/kaam-chor/FormApi'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  submitJob(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/step1`, data);
  }
  submitCompany(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/step2`, data);
  }
  submitBasic(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/step3`, data);
  }
}