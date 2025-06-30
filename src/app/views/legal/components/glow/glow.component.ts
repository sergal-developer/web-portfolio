import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'demo-glow',
    templateUrl: './glow.html',
    styleUrls: ['./glow.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class GlowComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }
}
