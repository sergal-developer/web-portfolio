import { EffectTerminal } from "./terminal.js";
export class WebApp {
    constructor() {
        this.inNavigation = false;
        this.effectTerminal = new EffectTerminal();
    }
    init() {
        this.setupIntro();
        this.setupEvents();
        console.info('app is initialized: ');
    }
    scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var scrollSpeed = 60;
        document.documentElement.scrollLeft -= (delta * scrollSpeed);
        document.body.scrollLeft -= (delta * scrollSpeed);
        e.preventDefault();
    }
    getLeftScroll(parent, position = 0) {
        const _parent = document.querySelector(parent);
        const width = _parent.clientWidth;
        const widthChild = this.frames[0].clientWidth;
        return width != widthChild ? widthChild * position : width * position;
    }
    gotoPage(page) {
        if (this.inNavigation) {
            return;
        }
        this.inNavigation = true;
        const _parent = document.querySelector('.frame-container');
        const left = this.getLeftScroll('.frame-container', page);
        const container = document.querySelector('.frame-horizontal');
        container.setAttribute('style', `margin-left: -${left}px`);
        console.log('left: ', left);
        // _parent.scroll({ left: left, behavior: 'smooth' });
        container.classList.add('moveOn');
        setTimeout(() => {
            container.classList.remove('moveOn');
            this.inNavigation = false;
        }, 500);
    }
    setupIntro() {
        this.effectTerminal.text('console', ['Hello, I\'m', 'Sergio Gallegos'], 'text', ['#fff']);
        const appFrame = document.querySelector('.app-frame');
        appFrame.classList.add('intro');
        setTimeout(() => {
            appFrame.classList.remove('intro');
        }, 10000);
    }
    setupEvents() {
        this.frameCollector = document.querySelector('.frame-container');
        this.frames = document.querySelectorAll('.frame-horizontal > .item');
        this.links = document.querySelectorAll('.navbar .item.page');
        this.links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                this.gotoPage(index);
            });
        });
    }
}
const webApp = new WebApp();
window.onload = () => {
    webApp.init();
};
