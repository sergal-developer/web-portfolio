
export class APP {
    percentageScroll = 0;
    animations: any[] = [];

    constructor() { }

    init() {
        
        this.setupAnimations();
        this.setupPage();
    }

    setupPage(){
        // reset when refresh screen
        // window.scrollTo(0, 0);

        const sections = document.querySelectorAll('.section-relative');
        const buttons = document.querySelectorAll('button.link');
        console.log('sections: ', buttons);

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.gotoSection(sections[index]);
            });
        })

        window.addEventListener('scroll', () => {
            console.clear();
            this.percentageScroll = this.percentageScrolled();
            console.log('this.percentageScroll: ', this.percentageScroll);
            this.updateLayout(this.percentageScroll);
        });

        // this.percentageScroll = this.percentageScrolled();
    }

    updateLayout(percentageScroll) {
        this.animations.forEach(anim => {
            if (this.percentageScroll >= anim.start && this.percentageScroll <= anim.end ) {
                console.log('item.id: ', anim.start);
                const values = {
                    steps: (anim.end - anim.start),
                    range: (anim.end - anim.start) - this.percentageScroll,
                }
                console.log('values: ', values);

                anim.items.forEach(item => {
                    const element: any = document.querySelector(`#${ item.id }`);
                    
                    if(item.style) {
                        let style = item.style.replace('{SCROLL}', this.percentageScroll);
                        style = style.replace('{RANGE}', values.range);
                        style = style.replace('{STEPS}', values.steps);
                        element?.setAttribute('style', style);
                    }

                    if(item.class) {
                        element.classList.value = item.class;
                    }
                    
                });
            }
        });
    }

    percentageScrolled() {
        const currentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const percentScroll = (currentScroll / currentHeight) * 100;

        return percentScroll || 0;
    }

    gotoSection(section: any) {
        // Desplaza la página a la posición calculada
        section.scrollIntoView({ behavior: "smooth" });
        this.percentageScroll = this.percentageScrolled();
        console.log('percentageScroll: ', this.percentageScroll);
        // section.scrollIntoView({ behavior: "smooth" });
        // if( this.inNavigation || this.currentPage === page) { return }
        // this.inNavigation = true;
        // this.currentPage = page;

        //get data atribute
        // const dataClass = link.getAttribute('data-class');
        // console.log('dataClass: ', dataClass);
        
        // const left = `-${ 100 * page }%`;
        // const transitionDurationByFrame = `transition-duration: ${ this.transitionDurationFrame }ms;`;
        // const marginLeftByFrame = `margin-left: ${ left };`;
        // this.frameContainer?.setAttribute('style', `${ this.frameContainerWidth }${ transitionDurationByFrame }${marginLeftByFrame}`);
        
        // if ( dataClass ) {
        //     this.frameContainer?.classList.replace(this.currentPageClass, dataClass);
        //     this.shapesContainer?.classList.replace(this.currentPageClass, dataClass);
        //     this.currentPageClass = dataClass;
        // }

        // this.frameContainer?.classList.add('moveOn');
        // setTimeout(() => {
        //     this.frameContainer?.classList.remove('moveOn');
        //     this.inNavigation = false;
        // }, this.transitionDurationFrame);

        // if(this.currentPage !== 0) {
        //     if(!this.navBar?.classList.contains('collapsed')) {
        //         this.navBar?.classList.add('collapsed');
        //     }
        // } else {
        //     this.navBar?.classList.remove('collapsed');
        // }
    }

    setupAnimations() {
        this.animations = [

            {
                start: 0, end: 1.5,
                items: [
                    { id: 'about-title ', class: 'title-page' }
                ]
            },
            {
                start: 1.5, end: 5,
                items: [
                    { id: 'about-title ', class: 'title-page collapsed' },
                ]
            },
        ];

        this.updateLayout(0);
    }
}


