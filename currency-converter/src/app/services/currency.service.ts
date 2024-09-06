import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl =
    'https://v6.exchangerate-api.com/v6/e2be79a211779bd33dd0e0e7/latest/UAH'; /* My API key - e2be79a211779bd33dd0e0e7*/ 

  constructor(private http: HttpClient) {}

  getRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
