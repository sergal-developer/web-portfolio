
export class APP {
    percentageScroll = 0;
    animations: any[] = [];

    constructor() { }

    init() {
        this.setupIntro();
        //this.setupEvents();
    }

    setupIntro(){
        // reset when refresh screen
        window.scrollTo(0, 0);

        const sections = document.querySelectorAll('section');
        console.log('sections: ', sections);
        sections.forEach((section) => {
            section.classList.add('stage0')
            section.addEventListener('click', () => {
                const maxStage: number = parseInt(section.getAttribute('max-stage'));
                const lastStage = section.classList[1];
                // const currentStage = 
                let newStage = 
                    section.classList.contains('stage0') ? 1 :
                    section.classList.contains('stage1') ? 2 :
                    section.classList.contains('stage2') ? 3 :
                    section.classList.contains('stage3') ? 4 :
                    section.classList.contains('stage4') ? 5 :
                    section.classList.contains('stage5') ? 6 :
                    section.classList.contains('stage6') ? 7 :
                    section.classList.contains('stage7') ? 8 :
                    section.classList.contains('stage8') ? 9 :
                    section.classList.contains('stage9') ? 10 :
                    section.classList.contains('stage10') ? 11 :
                    section.classList.contains('stage11') ? 12 :
                    section.classList.contains('stage12') ? 13 :
                    section.classList.contains('stage13') ? 14 :
                    section.classList.contains('stage14') ? 15 : 0;
                
                newStage = newStage <= maxStage ? newStage : 0;
                section.classList.replace(lastStage, `stage${ newStage }`)
            });
        })
    }

    setupEvents() {
        // reset when refresh screen
        window.scrollTo(0, 0);

        // set animation for all items 
        this.setupAnimations();

        // enable event scroll
        window.addEventListener('scroll', () => {
            console.clear();
            this.percentageScroll = this.percentageScrolled();

            console.log('percentageScroll: ', this.percentageScroll);
            this.updateLayout(this.percentageScroll);
        });
    }

    setupAnimations() {
        this.animations = [

            {
                start: 0, end: 10,
                items: [
                    { id: 'asteroids-main', style: 'opacity: 1;' },
                    { id: 'planet-main', style: 'transform: scale(calc( {RANGE} * ({STEPS} / {RANGE} ) ));' },
                    { id: 'developer', style: 'opacity: 0;' },
                    { id: 'title-intro', style: 'opacity: 1; top: calc(10% * {SCROLL});' },
                    { id: 'intro', style: 'opacity: 1;' },
                ]
            },
            {
                start: 10, end: 20,
                items: [
                    { id: 'asteroids-main', style: 'opacity: 0;' },
                    { id: 'planet-main', style: 'transform: scale(calc(5 / ({SCROLL})));' },
                    { id: 'developer', style: 'opacity: 0;' },
                    { id: 'title-intro', style: 'opacity: 1; top: calc(5 * {SCROLL}%);' },
                    { id: 'intro', style: 'opacity: 1;' },
                ]
            },
            {
                start: 20, end: 30,
                items: [
                    { id: 'asteroids-main', style: 'opacity: 1;' },
                    { id: 'planet-main', style: 'transform: scale(1);' },
                    { id: 'developer', style: 'opacity: 1;' },
                    { id: 'title-intro', style: 'opacity: 1;' },
                    { id: 'intro', style: 'opacity: 0;' },
                ]
            },
        ];

        this.updateLayout(0);
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
                    
       
                    let style = item.style.replace('{SCROLL}', this.percentageScroll);
                    style = style.replace('{RANGE}', values.range);
                    style = style.replace('{STEPS}', values.steps);
                    element?.setAttribute('style', style);
                });
            }
        });
    }

    percentageScrolled() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        return percentage;
    }


}


