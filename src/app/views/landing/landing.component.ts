import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService, _ } from '@ngx-translate/core';
import { EventBus, EventBusService } from '../../shared/events/EventBus.service';
import { GoogleAnalyticsService } from '../../shared/services/google.analytics.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfigData } from '../../shared/content/config.data';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs';

@Component({
    selector: 'landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
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
    timeDelay = 1800;
    percerntScroll = 0;
    browserLangs: string[] = [];
    currentLang: string = '';
    currentLangMask: string = '';
    loadingLanguage = false;
    mobileMenuOpen = false;
    mainScroll = 'main';

    constructor(
        private viewportScroller: ViewportScroller,
        private translate: TranslateService,
        private eventBusService: EventBusService,
        private _ga: GoogleAnalyticsService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _title: Title) {
        this.translate.addLangs(ConfigData.availableLangs);
        this.browserLangs = this.translate.getLangs();
        this.currentLang = 'en';
        this.currentLangMask = 'english';
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

        this.eventBusService.subscribe('navigateTo').subscribe((event: EventBus)  => {
            this.goTo(event.data)
        });

        this._ga.TrackScreen('visualization', 'landing page');

        this.init();
    }

    init() {
        // detect if is first ejecution in page
        setTimeout(() => {
            this.startEvents();
            const param = this._activatedRoute.snapshot.queryParams["section"];
            if(param) {
                this.goTo(param);
                this._router.navigate([]);
                return;
            }

            if (scrollY === 0) {
                setTimeout(() => {
                    this.goTo('about');
                }, this.timeDelay);
            }

            if (this.current != 'init' || scrollY > 100 && scrollY < 250) {
                this.goTo(this.current == 'init' ? 'about' : this.current);
            }
        }, 500);

    }

    goTo(section: string) {
        if(!section) { return; }
        this.menus.map((m) => {
            m.active = m.section == section;
        });

        const _section = `#${section}`;
        const view: any = document.querySelector(_section);
        const top = view?.offsetTop;
        view?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            // inline: "nearest"
        });

        this._ga.TrackEvent('click', `section: ${section}`, section);

        this._title.setTitle(`SERGAL - ${section.toUpperCase()}`);

        if (section === 'init') {
            setTimeout(() => {
                this.goTo('about');
            }, this.timeDelay);
        }

        this.mobileMenuOpen = false;
    }

    startEvents( ) {
        const mainScroll = document.querySelector(this.mainScroll);
        if(mainScroll) {
            mainScroll.addEventListener('scroll', event => this.onScroll(event));
        }
    }
 
    // @HostListener('window:scroll', ['$event'])
    onScroll(event?: Event) {
        this.getSectionsProps();
        this.percerntScroll = this.percentScroll();
        
        const app: any = document.querySelector(this.mainScroll);
        const scrollTop = app.scrollTop;

        this.sectionProps.forEach((section: any) => {
            if (scrollTop > section.sectionTop - 100) {
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

        // this._title.setTitle(`SERGAL - ${this.current.toUpperCase()}`);
        event?.preventDefault();
        return true;
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
        const app: any = document.querySelector(this.mainScroll);
        const scrollHeight = app.scrollHeight;
        const clientHeight = app.clientHeight;
        const scrollTop = app.scrollTop;
        const actual = scrollTop == 0 ? 0 : scrollTop + clientHeight;

        let percent = 0;
        try {
            percent = (actual * 100) / scrollHeight;
        } catch (error) {
            console.log('ERR.percentScroll(): ', error);
        }
        return percent;
    }

    toogleMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
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

        const availableLangs: any = {
            'en': { mask: 'english' },
            'es': { mask: 'español' },
        };

        this.currentLangMask = availableLangs[this.currentLang].mask;
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