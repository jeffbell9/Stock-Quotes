import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
    selector: 'app-add-delete',
    templateUrl: 'add-delete.component.html',
    styleUrls: ['add-delete.component.css']
})

export class AddDeleteComponent {

    ticker: string;

    constructor(private displayService: DisplayService) {
        
    }

    addTicker() { 
        this.displayService.displayInfo(this.ticker);
        this.ticker = null;

    }

    removeTicker() {
        let symbol = this.ticker;

        for(let quote in this.displayService.quotes) {
            if(symbol.toUpperCase() === this.displayService.quotes[quote].ticker) {
                this.displayService.quotes
                .splice(this.displayService.quotes
                .indexOf(this.displayService.quotes[quote]), 1);
            }
        }

        for(let item in this.displayService.tickers) {
            if(symbol.toUpperCase() === this.displayService.tickers[item]) {
                this.displayService.tickers
                .splice(this.displayService.tickers
                .indexOf(this.displayService.tickers[item]), 1);
            }
        }

            this.ticker = null;
    }

}