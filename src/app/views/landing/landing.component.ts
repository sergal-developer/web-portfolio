import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'landing',
    templateUrl : './landing.html',
    styleUrls   : [ './landing.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class LandingComponent implements OnInit {
    menus = [
        { id: 'navAbout', name: 'Acerca de', section: 'about', active: true },
        { id: 'navExperience', name: 'Experiencia', section: 'experience', active: false },
        { id: 'navskills', name: 'Habilidades & Portafolio', section: 'skills', active: false },
    ];
    navlinks: any = [];
    sections: any = [];

    constructor() {
        // setTimeout(() => {
        //     window.scrollTo(0, 0);
        // }, 300);
    }

    ngOnInit(): void {
        this.init();
    }

    goTo(section: string) {
        const view = document.querySelector(`#${section}`);
        view?.scrollIntoView({ behavior: "smooth" });
        this.menus.map((m) => {
            m.active = m.section == section;
        });
    }

    init() {
        this.navlinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section-relative');

    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
        let current = "";
        this.sections.forEach((section: any) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            console.log('sectionHeight: ', sectionHeight);
            console.log('pageYOffset: ', pageYOffset);

            if (pageYOffset >= sectionHeight -1) {
               current = section.getAttribute("id");
               console.log('section: ', section);
            }
        });

        console.log('current: ', current);
        
        this.navlinks.forEach((li: any) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
            li.classList.add("active");
            }
        });
        
        event.preventDefault();
        return false;
    }
}
