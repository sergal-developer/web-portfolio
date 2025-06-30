import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'help',
    templateUrl: './help.html',
    styleUrls: ['./help.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class HelpComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
