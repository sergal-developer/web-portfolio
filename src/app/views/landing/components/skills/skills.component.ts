import { Component, ViewEncapsulation } from '@angular/core';
import { _, TranslateService } from '@ngx-translate/core';
import { SourceData } from '../../../../shared/content/source.data';
import { PortfolioEntity } from '../../../../shared/entities/portfolio.entity';
import { SkillEntity, TechnologyEntity } from '../../../../shared/entities/technology.entity';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';

@Component({
    selector: 'skills',
    templateUrl: './skills.html',
    styleUrls: ['./skills.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class SkillsComponent {
    sourceData = new SourceData();
    skills: Array<SkillEntity> = [];
    technologies: Array<TechnologyEntity> = [];
    portfolio: Array<PortfolioEntity> = [];

    size = 100;
    style = 'width: 100%';

    title = {
        name: '',
        namealt: '',
        title: '',
        position: ''
    }

    constructor(private translate: TranslateService,
        private eventBusService: EventBusService) {

        this.technologies = this.sourceData.getTechnologies();
        this.portfolio = this.sourceData.getPortfolio();
        this.skills = this.sourceData.getSkills();
        this.updateLanguageDependedncies();
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

        this.technologies.map(tech => {
            this.translate.get(_(`GLOBAL.${tech.levelName}`)).subscribe((res: string) => {
                tech.levelName = res
            });
        });
    }
    //#endregion LANGUAGE
}
