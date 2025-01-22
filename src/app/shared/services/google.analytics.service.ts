import { Injectable } from "@angular/core";
// tslint:disable: member-ordering
declare const gtag: Function;
@Injectable()
export class GoogleAnalyticsService {
    private trackIdGA: string = '';
    private analyticsEvents = new GAnalyticsEvents();

    constructor() { }

    public setTrackID(trackid: string) {
        this.trackIdGA = trackid;
    }

    public getTrackID() {
        return this.trackIdGA;
    }

    private createDataLayer() {
        let script: HTMLScriptElement = document.createElement('script');
        script.text = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                // console.log('GA:', ...arguments);
                dataLayer.push(arguments);
            }
            gtag('js', new Date()); `;
        document.head.prepend(script);

        setTimeout(() => {
            gtag('config', this.getTrackID());
        }, 500);
    }

    private createGTagManager() {
        let script: HTMLScriptElement = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.getTrackID();
        document.head.prepend(script);
    }

    public createTrackID(name?: string, cookieDomain?: string) {
        this.createGTagManager();
        setTimeout(() => {
            this.createDataLayer();
        }, 500);
    }

    private existGtagFunc() {
        return typeof gtag == 'function' ? true : false; 
    }

    private gtagArguments(...args: any) {
        if(!this.existGtagFunc()) { 
            this.createDataLayer();
        }
        gtag(...args);
    }

    public TrackPage(page?: string) {
        let defaultUrl = location.href.replace(location.origin, '');
        page = page || defaultUrl;

        const event = this.analyticsEvents.pageView(defaultUrl, page);
        this.gtagArguments(event.action, event.name, event.parameters);
    }

    private convertoToQuery(text: string, splitSymbol: string) {
        let arrayUrl = text.split(splitSymbol);
        let resultUrl = {
            page: '',
            title: ''
        };

        for (let i = 0; i < arrayUrl.length; i++) {
            if (i === 0) {
                resultUrl.page = arrayUrl[i];
            } else if (i === 1) {
                resultUrl.page += `?${arrayUrl[i]}`;
            } else {
                if (!arrayUrl[i].includes('reload')) {
                    resultUrl.page += `&${arrayUrl[i]}`;
                }
            }
            if (arrayUrl[i].includes('page')) {
                resultUrl.title = arrayUrl[i].replace('page=', '');
            }
        }
        return resultUrl;
    }

    public TrackIframe(page?: string) {
        let query = this.convertoToQuery(location.href, ';');
        let defaultUrl = query.page.replace(location.origin, '');
        defaultUrl = encodeURI(defaultUrl);

        page = page || defaultUrl;
        const title = query?.title || page;
        const event = this.analyticsEvents.pageView(defaultUrl, title);
        this.gtagArguments(event.action, event.name, event.parameters);
    }

    public TrackScreen(screenview?: string, name?: string) {
        const event = this.analyticsEvents.custom('screen_view', { screen_name: name || screenview });
        this.gtagArguments(event.action, event.name, event.parameters);
    }

    public TrackEvent(eventAction: string, eventLabel?: string, eventCategory?: string, eventValue?: number) {
        const params = {
            category: eventCategory || '',
            label: eventLabel || location.href,
            value: eventValue || null
        };

        const event = this.analyticsEvents.custom(eventAction, params);
        this.gtagArguments(event.action, event.name, event.parameters);
    }

    public TrackSocial(socialNetwork: string, socialAction: string, socialTarget: string) {
        const params = {
            social_network: socialNetwork,
            social_action: socialAction,
            social_target: socialTarget
        };

        const event = this.analyticsEvents.custom('social', params);
        this.gtagArguments(event.action, event.name, event.parameters);
    }

    public TrackFlowEvent(eventAction: string, eventLabel?: string, eventCategory?: string, data?: object) {
        let params = {
            category: eventCategory || '',
            label: eventLabel || location.href,
        };
        if (data) {
            params = Object.assign(params, data);
        }
        const event = this.analyticsEvents.custom(eventAction, params);
        this.gtagArguments(event.action, event.name, event.parameters);
    }
}

class GAnalyticsEvents {
    pageView(page_location: string, page_title: string, client_id = 'GLOW', language = 'EN-US', page_encoding = 'UTF-8') {
        return {
            action: 'event',
            name: 'page_view',
            parameters: {
                page_location: page_location,
                client_id: client_id,
                language: language,
                page_encoding: page_encoding,
                page_title: page_title,
            }
        }
    }
    search(search_term: string) {
        return {
            action: 'event',
            name: 'search',
            parameters: {
                search_term: search_term,
            }
        }
    }

    custom(eventName: string, parameters?: Object) {
        return {
            action: 'event',
            name: eventName,
            parameters: parameters || {}
        }
    }
}