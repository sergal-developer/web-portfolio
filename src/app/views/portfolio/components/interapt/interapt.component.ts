import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'demo-interapt',
    templateUrl: './interapt.html',
    styleUrls: ['./interapt.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class InteraptComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }
}
