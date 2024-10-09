import { AfterContentInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.scss'],
    encapsulation: ViewEncapsulation.None
})

export class LandingComponent implements OnInit, AfterContentInit {
    menus = [
        { id: 'navAbout', name: 'Acerca de', section: 'about', active: true },
        { id: 'navExperience', name: 'Experiencia', section: 'experience', active: false },
        { id: 'navskills', name: 'Habilidades & Portafolio', section: 'skills', active: false },
    ];
    navlinks: any = [];
    sections: Array<Element> = [];
    sectionProps: Array<any> = [];
    current = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        this.onScroll(new Event('init', {}));
    }

    goTo(section: string) {
        const view = document.querySelector(`#${section}`);
        view?.scrollIntoView({ 
            block: "center",
            behavior: "smooth" });
        this.menus.map((m) => {
            m.active = m.section == section;
        });
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
        this.sections = Array.from(document.querySelectorAll('.section-relative'));
        this.sections.forEach((section: any) => {
            let props = {
                sectionTop: section.offsetTop,
                sectionHeight: section.clientHeight,
                id: section.getAttribute('id')
            }
            
            if (scrollY >= props.sectionTop - 1) {
                this.current = props.id;
            }
        });

        this.navlinks = document.querySelectorAll('.nav-link');
        this.navlinks.forEach((li: any) => {
            li.classList.remove("active");
            if (li.classList.contains(this.current)) {
                li.classList.add("active");
            }
        });
        event.preventDefault();
        return false;
    }
}
