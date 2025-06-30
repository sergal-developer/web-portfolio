import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component( {
    selector: 'titlepage-component',
    templateUrl: './titlepage.html',
    styleUrls: ['./titlepage.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
} )

export class TitlepageComponent {
    @Input() id = 'title';
    @Input() name = '';
    @Input() title = '';
    @Input() description = '';
    @Input() namealt = '';
    
    constructor() {
    }
}
