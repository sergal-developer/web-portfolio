
import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { _, TranslateService } from '@ngx-translate/core';
import { SourceData } from '../../../../shared/content/source.data';
import { PortfolioEntity } from '../../../../shared/entities/portfolio.entity';
import { TechnologyEntity } from '../../../../shared/entities/technology.entity';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';

@Component({
    selector: 'portfolio-list',
    templateUrl: './portfolio-list.html',
    styleUrls: ['./portfolio-list.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PortfolioListComponent {
    sourceData = new SourceData();
    portfolio: Array<PortfolioEntity> = [];
    technologies: Array<TechnologyEntity> = [];

    title = {
        name: '',
        namealt: '',
        title: '',
        position: ''
    }
    datePipe = new DatePipe('en-US');

    constructor(private translate: TranslateService,
        private eventBusService: EventBusService,
        private _router: Router) {
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

        this.technologies = this.sourceData.getTechnologies();
        this.portfolio = this.normalizeData(this.sourceData.getPortfolio());
    }
    //#endregion LANGUAGE

    gotoProject(item: any) {
        if (item.url) {
            this._router.navigate([item.url])
        }
    }

    normalizeData(portfolio: Array<PortfolioEntity>) {
        let projects = portfolio.map((item: PortfolioEntity) => {
            item._description = item.description;

            this.translate.get(_(item.description)).subscribe((res: string) => {
                item._description = res
            });
            return item;
        });
        return projects;

    }
}
