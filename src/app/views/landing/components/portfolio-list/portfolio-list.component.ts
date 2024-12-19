import { Component, ViewEncapsulation } from '@angular/core';
import { PORTFOLIO } from '../../../../data/datacontent';
import { _, TranslateService } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';

@Component( {
    selector    : 'portfolio-list',
    templateUrl : './portfolio-list.html',
    styleUrls   : [ './portfolio-list.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class PortfolioListComponent {
    data = PORTFOLIO;
    portfolios: Array<any> = [];
    size = 100;
    style = 'width: 100%';

    portfolio = PORTFOLIO.list;
    title = {
        name: '',
        namealt: '',
        title: '',
        position: ''
    }

    constructor(private translate: TranslateService,
        private eventBusService: EventBusService) {
    }

    ngOnInit(): void {
        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.updateLanguageDependedncies();
        });
        this.updateLanguageDependedncies();
    }

    //#region LANGUAGE
    updateLanguageDependedncies() {
        this.translate.get(_(`PORTFOLIO.title`)).subscribe((res: string) => {
            this.title.title = res;
        });
        this.translate.get(_(`PORTFOLIO.position`)).subscribe((res: string) => {
            this.title.position = res
        });
    }
    //#endregion LANGUAGE
}
