import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'demo-incident-map',
    templateUrl: './incidentMap.html',
    styleUrls: ['./incidentMap.scss'],
    encapsulation: ViewEncapsulation.None
})

export class IncidentMapComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }
}
