import { AboutData } from "../javascript/data/about.js";
import { EducationData } from "../javascript/data/education.js";
import { ExperienceData } from "../javascript/data/experience.js";
import { HomeData } from "../javascript/data/home.js";
import { PortfolioData } from "../javascript/data/portfolio.js";
import { SkillsData } from "../javascript/data/skills.js";
export class APP {
    constructor() {
        this.inNavigation = false;
        this.currentPage = 0;
        this.transitionDurationFrame = 1000;
        this.frameName = '.page-frame-container';
        this.frameContainerName = '.pfc-area';
        this.frameContainerWidth = `width: calc(100%);`;
        this.frameItemsName = '.pfc-area > .item';
        this.linksName = '.navbar .item.page';
        this.navbarName = '.navbar';
        this.shapesName = '.shapes';
        this.currentPageClass = 'home';
        // DATA
        this.data = {
            home: new HomeData(),
            about: new AboutData(),
            skills: new SkillsData(),
            experience: new ExperienceData(),
            education: new EducationData(),
            portfolio: new PortfolioData(),
        };
    }
    init() {
        this.setupEvents();
        this.setupData();
    }
    setupEvents() {
        this.navBar = document.querySelector(this.navbarName);
        this.frameCollector = document.querySelector(this.frameName);
        this.frames = document.querySelectorAll(this.frameItemsName);
        this.links = document.querySelectorAll(this.linksName);
        this.frameContainer = document.querySelector(this.frameContainerName);
        this.frameContainerWidth = `width: calc(100% * ${this.frames.length});`;
        this.frameContainer.setAttribute('style', `${this.frameContainerWidth}`);
        this.shapesContainer = document.querySelector(this.shapesName);
        this.links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                this.gotoPage(index, link);
            });
        });
    }
    gotoPage(page, link) {
        if (this.inNavigation || this.currentPage === page) {
            return;
        }
        this.inNavigation = true;
        this.currentPage = page;
        //get data atribute
        const dataClass = link.getAttribute('data-class');
        console.log('dataClass: ', dataClass);
        const left = `-${100 * page}%`;
        const transitionDurationByFrame = `transition-duration: ${this.transitionDurationFrame}ms;`;
        const marginLeftByFrame = `margin-left: ${left};`;
        this.frameContainer.setAttribute('style', `${this.frameContainerWidth}${transitionDurationByFrame}${marginLeftByFrame}`);
        if (dataClass) {
            this.frameContainer.classList.replace(this.currentPageClass, dataClass);
            this.shapesContainer.classList.replace(this.currentPageClass, dataClass);
            this.currentPageClass = dataClass;
        }
        this.frameContainer.classList.add('moveOn');
        setTimeout(() => {
            this.frameContainer.classList.remove('moveOn');
            this.inNavigation = false;
        }, this.transitionDurationFrame);
        if (this.currentPage !== 0) {
            if (!this.navBar.classList.contains('collapsed')) {
                this.navBar.classList.add('collapsed');
            }
        }
        else {
            this.navBar.classList.remove('collapsed');
        }
    }
    setupData() {
        const homeElement = document.querySelector('#home');
        const aboutElement = document.querySelector('#about');
        const skillsElement = document.querySelector('#skills');
        const experienceElement = document.querySelector('#experience');
        // const educationElement = document.querySelector('#education');
        const portfolioElement = document.querySelector('#portfolio');
        homeElement.innerHTML = this.data.home.getData();
        aboutElement.innerHTML = this.data.about.getData();
        skillsElement.innerHTML = this.data.skills.getData();
        experienceElement.innerHTML = this.data.experience.getData();
        // educationElement.innerHTML = this.data.education.getData();
        portfolioElement.innerHTML = this.data.portfolio.getData();
    }
}
const app = new APP();
window.onload = () => app.init();
