import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'portfolio-view',
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PortfolioViewComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
