import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jsonp, Response } from '@angular/http';

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

    constructor(private jsonp: Jsonp) {

    }

    private handleError(error: any) {
        const errMsg = "Invalid ticker symbol";
        alert(errMsg);
    }

    getTickerInfo(ticker: string) {
            return this.jsonp.request('https://www.google.com/finance/info?q=NSE:' + ticker + '&callback=JSONP_CALLBACK')
                .toPromise()
                .then(response => JSON.parse(response.text().replace("//", "")))
                .catch((res: Response) => this.handleError(res));
    }
    
    displayInfo(ticker: string) {
                this.getTickerInfo(ticker)
                .then(data => {
                    if(data !== undefined) {
                        this.quotes.push({ticker: data[0].t, last: data[0].l});
                    }
                });
     } 
} 