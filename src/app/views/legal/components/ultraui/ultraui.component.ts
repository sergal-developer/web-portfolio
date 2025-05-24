import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'demo-ultraui',
    templateUrl: './ultraui.html',
    styleUrls: ['./ultraui.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UltrauiComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }
}
