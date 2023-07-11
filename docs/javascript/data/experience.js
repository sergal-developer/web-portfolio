import { Template } from "./template.js";
export class ExperienceData {
    constructor() {
        this.template = new Template();
        this.data = {
            title: "Experience",
            subtitle: "14 Years Experience!",
            description: `<p>
        Sergio started working as a designer and programmer in 2008. During his first years he worked in projects
        with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web development,
        and desktop application development with Microsoft Tecnologies. Sergio acknowledges the benefits of agile
        methodologies to ensure predictive delivery in software projects. He has experience working with Scrum and
        Kanban methods. Additionally, Sergio has a solid background in design patterns, OOP, and software
        architectures for web development. He is on top of the latest trends in web development.
        </p>`,
            list: [
                {
                    name: "RockWell Automation",
                    type: "Web Developer",
                    period: "MAR <b>2023</b> - JUL <b>2023</b>",
                    image: '/asserts/img/rockwell.png',
                    description: `<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "Angular 12" },
                        { name: "Typescript" },
                        { name: "HTML5" },
                        { name: "Jira" },
                        { name: "Jenkins" },
                        { name: "github" },
                        { name: "Javascript" },
                        { name: "SASS" },
                    ],
                    listTech: '',
                },
                {
                    name: "Disney",
                    type: "Web Developer",
                    period: "JUL <b>2022</b> - JUN <b>2023</b>",
                    image: '/asserts/img/disnep.png',
                    description: `<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "Angular 12" },
                        { name: "Typescript" },
                        { name: "HTML5" },
                        { name: "Jira" },
                        { name: "Jenkins" },
                        { name: "github" },
                        { name: "Javascript" },
                        { name: "SASS" },
                    ],
                    listTech: '',
                },
                {
                    name: "Globant GLOW",
                    type: "Web Developer",
                    period: "SEP <b>2017</b> - JUL <b>2022</b>",
                    image: '/asserts/img/globant.png',
                    description: `<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "Angular 12" },
                        { name: "Typescript" },
                        { name: "HTML5" },
                        { name: "Jira" },
                        { name: "Jenkins" },
                        { name: "github" },
                        { name: "Javascript" },
                        { name: "SASS" },
                    ],
                    listTech: '',
                },
                {
                    name: "DELL EMC",
                    type: "Web Developer",
                    period: "AUG <b>2017</b> - SEP <b>2017</b>",
                    image: '/asserts/img/dell.png',
                    description: `<p>The customer search and management application, the development was a module of the DELL EMC site, using AngularJs technology and SOAP as information provider, our day to day was managed through an internal ticketing application, using the AGILE methodology. The development consisted in making more efficient the search of customers and present their details in a more comfortable way for consumers.</p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "AngularJs" },
                        { name: "Mercurial SCM" },
                        { name: "HTML5" },
                        { name: "Javascript" },
                        { name: "CSS3" },
                        { name: "SOAP" },
                    ],
                    listTech: '',
                },
                {
                    name: "Zaplabs LLC",
                    type: "Web Developer",
                    period: "APR <b>2017</b> - AUG <b>2017</b>",
                    image: '/asserts/img/zaplabs.png',
                    description: `<p>The application was a real estate sales site using riot and javascript as frontend technology along with nodejs, our day to day was managed through JIRA using the AGILE methodology. The development consisted of modernizing the client's site prioritizing speed and stability</p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "GruntJs" },
                        { name: "HTML" },
                        { name: "github" },
                        { name: "CSS3" },
                        { name: "Javascript" },
                        { name: "RIOT" },
                        { name: "SOAP" },
                    ],
                    listTech: '',
                },
                {
                    name: "Ebay, VivaAnuncios",
                    type: "Web Developer",
                    period: "NOV <b>2016</b> - APR <b>2017</b>",
                    image: '/asserts/img/vivaanuncios.png',
                    description: `<p> The project was to maintain the child site of ebay &ldquo;vivaanuncios.com&rdquo;, the technologies used are: jquery, google maps api, javascript, consuming microservices, our day to day was managed through JIRA using the SCRUM methodology. </p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gruntjs" },
                        { name: "HTML5" },
                        { name: "github" },
                        { name: "WebServices" },
                        { name: "Javascript" },
                    ],
                    listTech: '',
                },
                {
                    name: "Interapt",
                    type: "Web Developer / Backend Developer",
                    period: "SEP <b>2016</b> - NOV <b>2016</b>",
                    image: '/asserts/img/interapt.png',
                    description: `<p>The application for managing medical visits and medical history, Angular 2 and Typescript technology was used, on the server side using Nodejs, Gulp, our day to day was managed through Jira using the SCRUM methodology. The development aims to upgrade the old system to a more modern one</p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "AngularJs" },
                        { name: "Gitlab" },
                        { name: "HTML5" },
                        { name: "Javascript" },
                        { name: "SASS" },
                        { name: "SOAP" },
                    ],
                    listTech: '',
                },
                {
                    name: "Scholastic",
                    type: "Web Developer / Backend Developer",
                    period: "SEP <b>2015</b> - JUL <b>2016</b>",
                    image: '/asserts/img/scholastic.png',
                    description: `<p> The project consisted of generating sites to advertise books, events and scholastic didactic material, the different sites and games were made on jquery, javascript, angularjs, with the use of PHP for contact forms, our day to day was to consult the pending tasks in Jira using the AGILE methodology. The development aims to create Single page sites to promote products, events, etc., with compatibility in multiple browsers and respecting the designs provided by the Scholastic design and UX team. </p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "AngularJs" },
                        { name: "Gitlab" },
                        { name: "HTML5" },
                        { name: "Javascript" },
                        { name: "SASS" },
                        { name: "SOAP" },
                    ],
                    listTech: '',
                },
                {
                    name: "Blackboard",
                    type: "Web Developer",
                    period: "SEP <b>2014</b> - AUG <b>2015</b>",
                    image: '/asserts/img/blackboard.png',
                    description: `<p>Management aplication of courses and learning online named &quot;Ultra-UI&quot;, was an application type SPA(Single Page Aplication), using the technology Angularjs and Typescript, in server side using Nodejs, Gruntjs and Jazminejs (for unit tests), our day to day was managed through Jira using SCRUM methodology. The development is intended to upgrade the old Blackboard System (Learn-Classic) in one new aplication more fresh, dynamic and faster with capacity responsive and cross browsing (Chrome, IE, Safari, Firefox, Opera), compatible with smartphones, tablets and desktop computers. </p>`,
                    tech: [
                        { name: "Nodejs" },
                        { name: "Gulpjs" },
                        { name: "Jazminejs" },
                        { name: "AngularJs" },
                        { name: "github" },
                        { name: "HTML5" },
                        { name: "Typescript" },
                        { name: "SASS" },
                        { name: "Jira" },
                        { name: "WebServices" },
                    ],
                    listTech: '',
                },
            ],
            listExperience: '',
        };
        this.html = `<h2>{title}</h2>
    <div class="title-divider"></div>
    <h3>{subtitle}</h3>
    {description}

    <div class="full-divider"></div>
    <ul class="timeline">
      {listExperience}
    </ul>
    `;
        this.listTemplate = `
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">{period}</p>
      <h3>{type}</h3>
      <div class="logo-enterprice">
          <img src="{image}" class="image-project" alt="{image}">
      </div>
      {description}

      <h4>Technologies</h4>
      <div class="list-tech">{listTech}</div>
    </div>
  </li>`;
        this.listTemplateTech = `<div>{name}</div>`;
    }
    getData() {
        this.data.list.forEach((item) => {
            item.listTech = this.template.injectInterateData(this.listTemplateTech, item.tech);
        });
        this.data.listExperience = this.template.injectInterateData(this.listTemplate, this.data.list);
        return this.template.injectData(this.html, this.data);
    }
}
