
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
    encapsulation: ViewEncapsulation.None,
    standalone: false
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
    _bktitle: any = null;
    datePipe = new DatePipe('en-US');
    projectLabel = '';

    constructor(private translate: TranslateService,
        private eventBusService: EventBusService,
        private _router: Router) {
    }

    ngOnInit(): void {
        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.updateLanguageDependedncies();
        });

        this.translate.get(_(`GLOBAL.project_label`)).subscribe((res: string) => {
            this.projectLabel = `${res} <span class='accent'>&bull;</span>`;
        });
        this.updateLanguageDependedncies();
    }

    //#region LANGUAGE
    updateLanguageDependedncies() {
        this.translate.get(_(`PORTFOLIO.title`)).subscribe((res: string) => {
            if (!this._bktitle) {
                this.title.title = res;
            } else {
                this._bktitle.title = res;
            }
        });
        this.translate.get(_(`PORTFOLIO.position`)).subscribe((res: string) => {
            if (!this._bktitle) {
                this.title.position = res;
            } else {
                this._bktitle.position = res;
            }
        });

        this.translate.get(_(`GLOBAL.project_label`)).subscribe((res: string) => {
            this.projectLabel = `${res} <span class='accent'>&bull;</span>`;
            if (this._bktitle) {
                this.title.name = this.projectLabel;
            }
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

    currentProject: PortfolioEntity | null = null;
    expandProject(project: PortfolioEntity) {
        if (!this._bktitle) {
            this._bktitle = { ...this.title };
        }
        this.currentProject = project;
        this.title.title = '';
        this.title.name = this.projectLabel;
        this.title.position = `<b><span class='accent'>/</span>${this.currentProject.name}</b>`;

    }

    closeProject() {
        this.currentProject = null;
        if (this._bktitle) {
            this.title = { ...this._bktitle };
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
