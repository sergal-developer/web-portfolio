import { Component, ViewEncapsulation } from '@angular/core';
import { DATA, PORTFOLIO } from '../../../../data/datacontent';
import { _, TranslateService } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';

@Component( {
    selector    : 'skills',
    templateUrl : './skills.html',
    styleUrls   : [ './skills.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class SkillsComponent {
    data = DATA;
    skills: Array<any> = [];
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
        this.skills = this.data.technologies;
        // console.log('this.data: ', this.portfolio);
    }

    ngOnInit(): void {
        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.updateLanguageDependedncies();
        });
        this.updateLanguageDependedncies();
    }

    //#region LANGUAGE
    updateLanguageDependedncies() {
        this.translate.get(_(`SKILLS.title`)).subscribe((res: string) => {
            this.title.title = res;
        });
        this.translate.get(_(`SKILLS.position`)).subscribe((res: string) => {
            this.title.position = res
        });
    }
    //#endregion LANGUAGE
}
