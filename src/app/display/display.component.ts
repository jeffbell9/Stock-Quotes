import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from '../display.service';
import { Quotes } from '../display.service';

@Component({
    selector: 'app-display',
    templateUrl: 'display.component.html',
    styleUrls: ['display.component.css']
})

export class DisplayComponent implements OnInit {

    constructor(private displayService: DisplayService) {

    }

    quotes: Array<Quotes> = this.displayService.quotes;
    
    
    ngOnInit() {
        for (let ticker of this.displayService.tickers) {
            this.displayService.displayInfo(ticker);
         }
     }
}