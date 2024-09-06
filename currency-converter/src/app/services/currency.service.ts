import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/UAH';

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}