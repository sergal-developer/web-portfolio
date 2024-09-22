import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ABOUT } from '../../../../data/datacontent';

@Component( {
    selector    : 'about',
    templateUrl : './about.html',
    styleUrls   : [ './about.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class AboutComponent implements OnInit {
    title = 'SERGAL';
    data = ABOUT;
    constructor() {
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        console.log('this.data: ', this.data);
        
    }
}
