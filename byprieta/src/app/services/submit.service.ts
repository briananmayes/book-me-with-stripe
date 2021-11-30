import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Submit } from '../../assets/Submit';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

 httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  submitForm(submission: Submit): Observable<any> {
  console.log("Hitting submit.service...");
  console.log("data is " + submission);
  return this.http.post(this.baseUrl + 'post', submission)}
}
