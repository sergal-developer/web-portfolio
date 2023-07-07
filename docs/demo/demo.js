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
        this.transitionDurationFrame = 500;
        this.frameName = '.page-frame-container';
        this.frameContainerName = '.pfc-area';
        this.frameContainerWidth = `width: calc(100%);`;
        this.frameItemsName = '.pfc-area > .item';
        this.linksName = '.navbar .item.page';
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
        this.frameCollector = document.querySelector(this.frameName);
        this.frames = document.querySelectorAll(this.frameItemsName);
        this.links = document.querySelectorAll(this.linksName);
        const container = document.querySelector(this.frameContainerName);
        this.frameContainerWidth = `width: calc(100% * ${this.frames.length});`;
        container.setAttribute('style', `${this.frameContainerWidth}`);
        this.links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                this.gotoPage(index);
            });
        });
    }
    gotoPage(page) {
        if (this.inNavigation || this.currentPage === page) {
            return;
        }
        this.inNavigation = true;
        this.currentPage = page;
        const left = `-${100 * page}%`;
        const container = document.querySelector(this.frameContainerName);
        const transitionDurationByFrame = `transition-duration: ${this.transitionDurationFrame}ms;`;
        const marginLeftByFrame = `margin-left: ${left};`;
        container.setAttribute('style', `${this.frameContainerWidth}${transitionDurationByFrame}${marginLeftByFrame}`);
        container.classList.add('moveOn');
        setTimeout(() => {
            container.classList.remove('moveOn');
            this.inNavigation = false;
        }, this.transitionDurationFrame);
    }
    setupData() {
        const homeElement = document.querySelector('#home');
        const aboutElement = document.querySelector('#about');
        const skillsElement = document.querySelector('#skills');
        const experienceElement = document.querySelector('#experience');
        const educationElement = document.querySelector('#education');
        const portfolioElement = document.querySelector('#portfolio');
        homeElement.innerHTML = this.data.home.getData();
        aboutElement.innerHTML = this.data.about.getData();
        skillsElement.innerHTML = this.data.skills.getData();
        experienceElement.innerHTML = this.data.experience.getData();
        educationElement.innerHTML = this.data.education.getData();
        portfolioElement.innerHTML = this.data.portfolio.getData();
    }
}
const app = new APP();
window.onload = () => app.init();
