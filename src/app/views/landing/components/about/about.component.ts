import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _, TranslateService } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../../../shared/events/EventBus.service';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class AboutComponent implements OnInit {
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
            this.translate.get(_(`ABOUT.title`)).subscribe((res: string) => {
                this.title.title = res;
            });
            this.translate.get(_(`ABOUT.position`)).subscribe((res: string) => {
                this.title.position = res
            });
        }
}
