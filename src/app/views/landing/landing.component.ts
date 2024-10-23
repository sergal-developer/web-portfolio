import { ViewportScroller } from '@angular/common';
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
    timeDelay = 2000;

    constructor(private viewportScroller: ViewportScroller) {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        // if (scrollY === 0) {
        //     setTimeout(() => {
        //         this.goTo('about');
        //     }, this.timeDelay);
        // }

        setTimeout(() => {
            this.onScroll(new Event('init', {}));
        }, 300);
    }

    goTo(section: string) {
        this.menus.map((m) => {
            m.active = m.section == section;
        });

        const view: any = document.querySelector(`#${section}`);
        const top = view?.offsetTop;
        view?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {

        const percernt = this.percentScroll();

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


        if (scrollY === 0) {
            setTimeout(() => {
                this.goTo('about');
            }, this.timeDelay);
        }

        return false;
    }

    percentScroll() {
        const app: any = document.querySelector('.app-page');
        let percent = 0;
        try {
            percent = (scrollY * 100) / app.clientHeight;
        } catch (error) {
            console.log('ERR.percentScroll(): ', error);
        }
        return percent;
    }
}
