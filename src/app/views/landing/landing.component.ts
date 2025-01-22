import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService, _ } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../shared/events/EventBus.service';
import { GoogleAnalyticsService } from '../../shared/services/google.analytics.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.scss'],
    encapsulation: ViewEncapsulation.None
})

export class LandingComponent implements OnInit {
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
    timeDelay = 2800;
    percerntScroll = 0;
    browserLangs: string[] = [];
    availableLangs: string[] = ['es', 'en'];
    currentLang: string = '';
    loadingLanguage = false;

    constructor(
        private viewportScroller: ViewportScroller,
        private translate: TranslateService,
        private eventBusService: EventBusService,
        private _ga: GoogleAnalyticsService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
        this.translate.addLangs(this.availableLangs);
        this.browserLangs = this.translate.getLangs();
        this.currentLang = 'en';
        this.translate.setDefaultLang(this.currentLang);
        this.eventBusService.publish({ name: 'language', data: this.currentLang });
        this.changeLang(this.currentLang);
        this.updateLanguageDependedncies();
    }

    ngOnInit(): void {
        this.loadingLanguage = true;
        setTimeout(() => {
            this.loadingLanguage = false;
        }, 500);

        this.eventBusService.subscribe('language').subscribe((eventData: EventBus) => {
            this.currentLang = eventData.data;
            this.translate.use(this.currentLang);
            this.changeLang(this.currentLang);
            this.updateLanguageDependedncies();

            setTimeout(() => {
                this.loadingLanguage = false;
            }, 1000);
        });

        this._ga.TrackScreen('visualization', 'landing page');


        // detect if is first ejecution in page
        setTimeout(() => {
            this.onScroll();
            const param = this._activatedRoute.snapshot.queryParams["section"];
            if(param) {
                this.goTo(param);
                this._router.navigate([]);
                return;
            }
            
            if (scrollY === 0) {
                setTimeout(() => {
                    this.goTo('about');
                }, this.timeDelay - 1000);
            }

            if (this.current != 'init' || scrollY > 100 && scrollY < 250) {
                this.goTo(this.current == 'init' ? 'about' : this.current);
            }
        }, 1000);

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

        this._ga.TrackEvent('click', `section: ${section}`, section);

        if (section === 'init') {
            setTimeout(() => {
                this.goTo('about');
            }, this.timeDelay);
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event?: Event) {

        this.getSectionsProps();
        this.percerntScroll = this.percentScroll();
        this.sections = Array.from(document.querySelectorAll('.section-relative'));
        this.sectionProps.forEach((section: any) => {
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

        event?.preventDefault();

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

        if (this.currentLang == language) {
            return;
        }

        this.currentLang = language;
        this.translate.use(this.currentLang);
        this.eventBusService.publish({ name: 'language', data: this.currentLang });
        this.loadingLanguage = true;

        // esto cambia el orden al momento de selecionar un lenguaje
        if (this.browserLangs[0] == this.currentLang) {
            this.browserLangs.shift();
            this.browserLangs.push(this.currentLang)
        }
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