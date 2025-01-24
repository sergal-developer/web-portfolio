import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceData } from '../../shared/content/source.data';
import { TranslateService } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../shared/events/EventBus.service';
import { ConfigData } from '../../shared/content/config.data';
import { Title } from '@angular/platform-browser';

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

    browserLangs: string[] = [];
    currentLang: string = '';

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private translate: TranslateService,
        private eventBusService: EventBusService,
        private _title: Title
    ) {
        this.translate.addLangs(ConfigData.availableLangs);
        this.browserLangs = this.translate.getLangs();
        this.currentLang = 'en';
        this.translate.setDefaultLang(this.currentLang);
        this.eventBusService.publish({ name: 'language', data: this.currentLang });

        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.currentLang = eventData.data;
            this.translate.use(this.currentLang);
        });
    }

    ngOnInit(): void {
        this.project = this._activatedRoute.snapshot.params['project'];
        this.isValid = this.validateProject();
    }

    validateProject() {
        const portafolios = this.sourceData.getPortfolio();
        const portafolio = portafolios.find(portafolio => portafolio.id === this.project);

        this._title.setTitle(`S. - ${ portafolio?.name }`);

        return portafolio ? true : false;
    }
}
