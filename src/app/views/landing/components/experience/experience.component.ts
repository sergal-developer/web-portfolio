import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService, _ } from '@ngx-translate/core';
import { SourceData } from '../../../../shared/content/source.data';
import { CompanyEntity } from '../../../../shared/entities/company.entity';
import { ProjectEntity } from '../../../../shared/entities/project.entity';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';

@Component({
    selector: 'experience',
    templateUrl: './experience.html',
    styleUrls: ['./experience.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ExperienceComponent implements OnInit {
    sourceData = new SourceData();
    projects: Array<ProjectEntity> = [];
    companies: Array<CompanyEntity> = [];

    from = 2006;
    to = 2025;

    title = {
        name: '',
        namealt: '',
        title: '',
        position: ''
    }

    constructor(
        private translate: TranslateService,
        private eventBusService: EventBusService
    ) {
    }

    ngOnInit(): void {
        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.updateLanguageDependedncies();
        });
        this.updateLanguageDependedncies();
    }


    //#region LANGUAGE
    updateLanguageDependedncies() {
        this.translate.get(_(`EXPERIENCE.title`)).subscribe((res: string) => {
            this.title.title = res;
        });
        this.translate.get(_(`EXPERIENCE.position`)).subscribe((res: string) => {
            this.title.position = res
        });

        this.projects = this.sourceData.getProjects();
        this.companies = this.sourceData.getCompanies();
    }
    //#endregion LANGUAGE
}
