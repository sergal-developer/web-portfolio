import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceData } from '../../shared/content/source.data';

@Component({
    selector: 'portfolio-view',
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PortfolioViewComponent implements OnInit {
    project = '';
    sourceData = new SourceData();
    isValid = false;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.project = this._activatedRoute.snapshot.params['project'];
        this.isValid = this.validateProject();
    }

    validateProject() {
        const portafolios = this.sourceData.getPortfolio();
        const portafolio = portafolios.find(portafolio => portafolio.id === this.project);
        return portafolio ? true : false;
    }
}
