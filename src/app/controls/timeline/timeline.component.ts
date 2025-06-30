import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CompanyTimelineEntity } from '../../shared/entities/company.entity';
import { ProjectTimelineEntity } from '../../shared/entities/project.entity';
import { Helpers } from '../../shared/utils/helper';

@Component( {
    selector: 'timeline',
    templateUrl: './timeline.html',
    styleUrls: ['./timeline.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
} )

export class TimelineComponent implements OnInit {
    @Input() projects: Array<ProjectTimelineEntity> = [];
    @Input() companies: Array<CompanyTimelineEntity> = [];

    steps = 0;
    from = 0;
    to = 0;
    years: Array<number> = [];
    currentZoom = 100;
    helpers = new Helpers();
    
    constructor() {
    }

    ngOnInit(): void {
        this.init();
    }

    sortData() {
        if(this.projects.length) {
            this.projects = this.projects.sort(this.helpers.dynamicSort('startDate'));
        }

        if(this.companies.length) {
            this.companies = this.companies.sort(this.helpers.dynamicSort('startDate'));
        }
    }

    init() {
        let projectsFrom = 0;
        let projectsTo = 0;
        let companiesFrom = 0;
        let companiesTo = 0;
        
        this.sortData();

        if(this.projects.length) {
            const _projectsFrom = new Date(this.projects[0].startDate);
            const _projectsTo = new Date(this.projects[this.projects.length - 1].endDate);
            projectsFrom = _projectsFrom.getFullYear();
            projectsTo = _projectsTo.getFullYear();
            this.from = projectsFrom;
            this.to = projectsTo;
        }
        if(this.companies.length) {
            const _companiesFrom = new Date(this.companies[0]?.startDate);
            const _companiesTo = new Date(this.companies[this.companies.length - 1].endDate);
            companiesFrom = _companiesFrom.getFullYear();
            companiesTo = _companiesTo.getFullYear();
            this.from = companiesFrom < this.from ? companiesFrom : this.from;
            this.to = companiesTo > this.to ? companiesTo : this.to;
        }

        this.steps = this.to - this.from;
        const steps = new Array<number>(this.steps);
        for (let idx = 0; idx <= steps.length; idx++) {
            const y = this.from + idx;
            this.years.push(y);            
        }
        this.normalize();
    }


    handleZoom() {
    }

    normalize() {
        this.companies.map((evt: CompanyTimelineEntity) => {
            evt._duration = `timeline-event-years-${evt.duration}${evt.durationFraction}`;
            // evt._level = ' timeline-level-' + evt.level;
            evt._showDetails = evt.showDetails ? ' show-details' : ' ';
            // evt._color = evt.color ? evt.color : '';
            evt._className = evt._duration;
        });

        this.projects.map((evt: ProjectTimelineEntity) => {
            evt._duration = 'timeline-event-years-' + evt.duration + evt.durationFraction;
            evt._level = ' timeline-level-' + evt.level;
            evt._showDetails = evt.showDetails ? ' show-details' : ' ';
            evt._color = evt.color ? evt.color : '';
            evt._className = evt._duration + evt._level + evt._showDetails + evt._color;
            evt._description = evt.description
        });
    }

    selectYear(year: number) {
        console.log('year: ', year);
    }
}
