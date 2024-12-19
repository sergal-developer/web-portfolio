import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'adn',
    templateUrl : './adn.html',
    styleUrls   : [ './adn.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class AdnComponent {
    @Input() from = 'title';
    @Input() to = '';
    @Input() projects = [];
    @Input() institutions = [];
    
    constructor() {
    }
}
