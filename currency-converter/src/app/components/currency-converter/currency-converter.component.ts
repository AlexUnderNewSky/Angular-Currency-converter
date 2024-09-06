import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  currencies = ['UAH', 'USD', 'EUR'];
  fromCurrency = 'UAH';
  toCurrency = 'USD';
  fromAmount: number = 1;
  toAmount: number = 0;
  rates: any = {};

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data.conversion_rates;
      this.convertCurrency();
    });
  }

  convertCurrency() {
    const fromRate = this.rates[this.fromCurrency];
    const toRate = this.rates[this.toCurrency];
    this.toAmount = +((this.fromAmount / fromRate) * toRate).toFixed(2); //add only 2 numbers after .
  }

  onFromAmountChange() {
    this.convertCurrency();
  }

  onToAmountChange() {
    const toRate = this.rates[this.toCurrency];
    const fromRate = this.rates[this.fromCurrency];
    this.fromAmount = +((this.toAmount * fromRate) / toRate).toFixed(2); //add only 2 numbers after .
  }
}
