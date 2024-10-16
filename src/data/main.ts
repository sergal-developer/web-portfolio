
export class APP {
    frames: any;
    frameCollector: HTMLElement | null = null;
    links: any;
    inNavigation = false;
    currentPage = 0;
    transitionDurationFrame = 1000;

    frameName = '.page-frame-container';
    frameContainerName = '.pfc-area';
    frameContainerWidth = `width: calc(100%);`;
    frameItemsName = '.pfc-area > .item';
    linksName = '.navbar .item.page';
    navbarName = '.navbar';
    shapesName = '.shapes';

    navBar: HTMLElement | null = null;
    frameContainer: HTMLElement | null = null;
    currentPageClass = 'home';
    shapesContainer: HTMLElement | null = null;

    constructor() {}

    init() {
        this.setupEvents();
    }

    setupEvents() {

        this.navBar = document.querySelector(this.navbarName);
        this.frameCollector = document.querySelector(this.frameName);
        this.frames = document.querySelectorAll(this.frameItemsName);
        this.links = document.querySelectorAll(this.linksName);
    
        this.frameContainer = document.querySelector(this.frameContainerName);
        this.frameContainerWidth = `width: calc(100% * ${ this.frames.length });`;
        this.frameContainer?.setAttribute('style', `${ this.frameContainerWidth }`);

        this.shapesContainer = document.querySelector(this.shapesName);
        
        this.links.forEach((link: HTMLElement, index: number) => {
            link.addEventListener('click', (e) => {
                this.gotoPage(index, link);
                const menu = document.querySelector('#navbar-menu');
                menu?.classList.remove('show');
            });
        });

        const menu = document.querySelector('#navbar-menu');
        const menuButton = document.querySelector('#navbar-menu-button');
        menuButton?.addEventListener('click', (e) => {
            if (menu?.classList.contains('show')) {
                menu?.classList.remove('show');
            } else {
                menu?.classList.add('show');
            }
        });
    }

    gotoPage(page: number, link: HTMLElement) {
        if( this.inNavigation || this.currentPage === page) { return }
        this.inNavigation = true;
        this.currentPage = page;

        //get data atribute
        const dataClass = link.getAttribute('data-class');
        console.log('dataClass: ', dataClass);
        
        const left = `-${ 100 * page }%`;
        const transitionDurationByFrame = `transition-duration: ${ this.transitionDurationFrame }ms;`;
        const marginLeftByFrame = `margin-left: ${ left };`;
        this.frameContainer?.setAttribute('style', `${ this.frameContainerWidth }${ transitionDurationByFrame }${marginLeftByFrame}`);
        
        if ( dataClass ) {
            this.frameContainer?.classList.replace(this.currentPageClass, dataClass);
            this.shapesContainer?.classList.replace(this.currentPageClass, dataClass);
            this.currentPageClass = dataClass;
        }

        this.frameContainer?.classList.add('moveOn');
        setTimeout(() => {
            this.frameContainer?.classList.remove('moveOn');
            this.inNavigation = false;
        }, this.transitionDurationFrame);

        if(this.currentPage !== 0) {
            if(!this.navBar?.classList.contains('collapsed')) {
                this.navBar?.classList.add('collapsed');
            }
        } else {
            this.navBar?.classList.remove('collapsed');
        }
    }
}
