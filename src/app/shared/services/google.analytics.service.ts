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

    public createTrackID(name?: string, cookieDomain?: string) {
        // "gtag" object is created from /config/index.html into script Google analytics
        let gtagScript: HTMLScriptElement = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.getTrackID();
        document.head.prepend(gtagScript);
        gtag('config', this.getTrackID());
    }

    public TrackPage(page?: string) {
        let defaultUrl = location.href.replace(location.origin, '');
        page = page || defaultUrl;

        const event = this.analyticsEvents.pageView(defaultUrl, page);
        gtag(event.action, event.name, event.parameters);
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
        gtag(event.action, event.name, event.parameters);
    }

    public TrackScreen(screenview?: string, name?: string) {
        const event = this.analyticsEvents.custom('screen_view', { screen_name: name || screenview });
        gtag(event.action, event.name, event.parameters);
    }

    public TrackEvent(eventAction: string, eventLabel?: string, eventCategory?: string, eventValue?: number) {
        const params = {
            category: eventCategory || '',
            label: eventLabel || location.href,
            value: eventValue || null
        };

        const event = this.analyticsEvents.custom(eventAction, params);
        gtag(event.action, event.name, event.parameters);
    }

    public TrackSocial(socialNetwork: string, socialAction: string, socialTarget: string) {
        const params = {
            social_network: socialNetwork,
            social_action: socialAction,
            social_target: socialTarget
        };

        const event = this.analyticsEvents.custom('social', params);
        gtag(event.action, event.name, event.parameters);
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
        gtag(event.action, event.name, event.parameters);
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