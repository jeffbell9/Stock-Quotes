import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface Quotes {
    ticker: string,
    last: string
}

@Injectable()
export class DisplayService implements Quotes {

    ticker: string;
    last: string;
    tickers: string[] = ["SPY", "AAPL"];
    quotes: Array<Quotes> = [];

    constructor(private http: Http) {

    }

    getTickerInfo(ticker: string) {
            return this.http.get('https://www.google.com/finance/info?q=NSE:' + ticker)
                .toPromise()
                .then(response => JSON.parse(response.text().replace("//", "")));
    }
    
    displayInfo(ticker: string) {
                this.getTickerInfo(ticker)
                .then(data => this.quotes.push({ticker: data[0].t, last: data[0].l}));
     } 
} 