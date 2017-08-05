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

    private handleError(error: any) {
        const errMsg = "Invalid ticker symbol";
        alert(errMsg);
    }

    getTickerInfo(ticker: string) {
            return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + ticker + '&interval=1min&apikey=F135A0A4W6SJ8ZEY')
                .toPromise()
                .then(response => response.json());
    }
    
    displayInfo(ticker: string) {
                this.getTickerInfo(ticker)
                .then(data => {
                    const latestQuote = Object.keys(data[ "Time Series (1min)" ])[0];
                    this.quotes.push({ticker: ticker.toUpperCase(), last: parseFloat(data[ "Time Series (1min)" ][latestQuote]['4. close']).toFixed(2)});
                })
                .catch(err => this.handleError(err));
     } 
} 