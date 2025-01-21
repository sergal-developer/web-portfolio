import { Component, ViewEncapsulation } from '@angular/core';
import { SOURCEDATA } from '../../../../data/datacontent';
import { _, TranslateService } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';
import { Route, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'portfolio-list',
    templateUrl: './portfolio-list.html',
    styleUrls: ['./portfolio-list.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PortfolioListComponent {
    portfolio: Array<any> = [];
    technologies: Array<any> = [];

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


        this.technologies = SOURCEDATA.technologies;
        this.portfolio = this.normalizeData(SOURCEDATA.portfolio.list);
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

    gotoProject(item: any) {
        if (item.url) {
            this._router.navigate([item.url])
        }
    }

    normalizeData(portfolio: Array<any>) {
        let projects = portfolio.map((item: any) => {
            item._start = this.datePipe.transform(item.startDate, 'yyyy');
            item._end = this.datePipe.transform(item.endDate, 'yyyy');
            item._years = item._start == item._end ? `${item._start}` : `${item._start} - ${item._end}`;

            if (item.tech && item.tech.length) {
                item._tech = [];
                item._types = [];
                item.tech.map((tech: string) => {
                    const th = this.technologies.find((th: any) => th.id == tech);
                    if (th) {
                        item._tech.push(th);
                        if (!item._types.includes(th.type)) {
                            item._types.push(th.type);
                        }
                    }
                });
            }

            return item;
        });
        console.log('projects: ', projects);
        return projects;

    }
}
