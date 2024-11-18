import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }
}
