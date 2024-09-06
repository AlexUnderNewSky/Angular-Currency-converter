import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usdRate: number = 0;
  eurRate: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.usdRate = data.conversion_rates.USD;
      this.eurRate = data.conversion_rates.EUR;
    });
  }
}
