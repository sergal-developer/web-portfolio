import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'main-element-component',
    templateUrl : './main-element.html',
    styleUrls   : [ './main-element.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class MainElementComponent {
    @Input() data: any;

    title = {
        name: 'Sergio Gallegos',
        namealt: '',
        title: 'FRONTEND <span class="accent">&amp;</span> BACKEND',
        position: '<span class="accent">/</span>Developer<span class="accent">.</span>'
    }

    constructor() {
    }
}
