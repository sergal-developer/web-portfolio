import { ViewportScroller } from '@angular/common';
import { AfterContentInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService, _ } from '@ngx-translate/core';
import { EventBusService, EventBus } from '../../shared/events/EventBus.service';

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
        { id: 'navskills', name: 'Habilidades', section: 'skills', active: false },
        { id: 'navsportfolio', name: 'Portafolio', section: 'portfolio', active: false },
    ];
    navlinks: any = [];
    sections: Array<Element> = [];
    sectionProps: Array<SectionProp> = [];
    current = '';
    timeDelay = 2000;
    percerntScroll = 0;
    browserLangs: string[] = [];
    currentLang: string = '';
    loadingLanguage = false;

    constructor(
        private viewportScroller: ViewportScroller,
        private translate: TranslateService,
        private eventBusService: EventBusService) {
        this.translate.addLangs(['es', 'en']);
        this.browserLangs = this.translate.getLangs();
        this.currentLang = 'en';
        this.translate.setDefaultLang(this.currentLang);
        this.eventBusService.publish({ name: 'language', data: this.currentLang });
    }

    ngOnInit(): void {
        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.currentLang = eventData.data;
            this.translate.use(this.currentLang);
            this.updateLanguageDependedncies();

            setTimeout(() => {
                this.loadingLanguage = false;
            }, 500);
        });
    }

    ngAfterContentInit(): void {
        // if (scrollY === 0) {
        //     setTimeout(() => {
        //         this.goTo('about');
        //     }, this.timeDelay);
        // }

        // setTimeout(() => {
        //     this.onScroll(new Event('init', {}));
        // }, 300);
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

        // setTimeout(() => {
        //     // console.info('scroll: ', {
        //     //     percernt: this.percerntScroll,
        //     //     scroll: scrollY,
        //     //     top: top
        //     // });
        //     // console.log('props: ', this.sectionProps);
        // }, 2000);
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {

        this.getSectionsProps();
        this.percerntScroll = this.percentScroll();
        this.sections = Array.from(document.querySelectorAll('.section-relative'));
        this.sectionProps.forEach((section: any) => {
            // console.log('scrollY: ', scrollY);
            // console.log('section.sectionTop: ', section.sectionTop);
            if (scrollY > section.sectionTop - 100) {
                this.current = section.id;
            }
        });

        this.navlinks = document.querySelectorAll('.nav-link');
        this.navlinks.forEach((li: any) => {
            li.classList.remove("active");
            if (li.classList.contains(this.current)) {
                li.classList.add("active");
            }
        });

        // console.log('this.current: ', this.current);
        event.preventDefault();


        // if (scrollY === 0) {
        //     setTimeout(() => {
        //         this.goTo('about');
        //     }, this.timeDelay);
        // }

        return false;
    }

    getSectionsProps() {
        this.sectionProps = [];
        this.sections = Array.from(document.querySelectorAll('.section-relative'));
        this.sections.forEach((section: any) => {
            let props = {
                sectionTop: section.offsetTop,
                sectionHeight: section.clientHeight,
                id: section.getAttribute('id')
            }
            this.sectionProps.push(props);
        });
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

    //#region LANGUAGE 
    changeLang(language: string) {
        this.currentLang = language;
        this.translate.use(this.currentLang);
        this.eventBusService.publish({ name: 'language', data: this.currentLang });
        this.loadingLanguage = true;
    }

    updateLanguageDependedncies() {
        this.menus.map((menu) => {
            this.translate.get(_(`NAV.${menu.id}`)).subscribe((res: string) => {
                menu.name = res;
            });
        });
    }
    //#endregion LANGUAGE 
}


export interface SectionProp {
    sectionTop: number,
    sectionHeight: number,
    id: string
}