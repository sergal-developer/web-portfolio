import { Template } from "./template.js";

export class ExperienceData {
  constructor() {}
  template = new Template();

  data = {
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
        period: "Mar 2023 - July 2023",
        image: 'https://mma.prnewswire.com/media/1981317/Rockwell_Automation_Logo.jpg?p=facebook',
        description: `<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "Angular 12",
          "Typescript",
          "HTML5",
          "Jira",
          "Jenkins",
          "github",
          "Javascript",
          "SASS",
        ],
      },
      {
        name: "Disney",
        type: "Web Developer",
        period: "July 2022 - Junary 2023",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1200px-Disney_wordmark.svg.png',
        
        description: `<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "Angular 12",
          "Typescript",
          "HTML5",
          "Jira",
          "Jenkins",
          "github",
          "Javascript",
          "SASS",
        ],
      },
      {
        name: "APX GLOW",
        type: "Web Developer",
        period: "September 2017 - July 2022",
        image: 'https://statics.globant.com/production/public/2022-08/globant-logo.jpg',
        
        description: `<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "Angular 12",
          "Typescript",
          "HTML5",
          "Jira",
          "Jenkins",
          "github",
          "Javascript",
          "SASS",
        ],
      },
      {
        name: "DELL EMC",
        type: "Web Developer",
        period: "August 2017 - September 2017",
        image: 'https://ingrammicrocloud.com/sites/default/files/2021-12/Dell_Logo_0.png',
        
        description: `<p>The customer search and management application, the development was a module of the DELL EMC site, using AngularJs technology and SOAP as information provider, our day to day was managed through an internal ticketing application, using the AGILE methodology. The development consisted in making more efficient the search of customers and present their details in a more comfortable way for consumers.</p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "AngularJs",
          "Mercurial SCM",
          "HTML5",
          "Javascript",
          "CSS3",
          "SOAP",
        ],
      },
      {
        name: "Zaplabs LLC",
        type: "Web Developer",
        period: "April 2017 - August 2017",
        image: 'https://photos.prnewswire.com/prnfull/20160616/380222',
        
        description: `<p>The application was a real estate sales site using riot and javascript as frontend technology along with nodejs, our day to day was managed through JIRA using the AGILE methodology. The development consisted of modernizing the client's site prioritizing speed and stability</p>`,
        tech: [
          "Nodejs",
          "GruntJs",
          "HTML",
          "github",
          "CSS3",
          "Javascript",
          "RIOT",
          "SOAP",
        ],
      },
      {
        name: "Ebay, VivaAnuncios",
        type: "Web Developer",
        period: "November 2016 - April 2017",
        image: 'https://blog.vivanuncios.com.mx/wp-content/uploads/2013/03/vivanuncios-presenta-su-nuevo-logo.png',
        
        description: `<p> The project was to maintain the child site of ebay &ldquo;vivaanuncios.com&rdquo;, the technologies used are: jquery, google maps api, javascript, consuming microservices, our day to day was managed through JIRA using the SCRUM methodology. </p>`,
        tech: [
          "Nodejs",
          "Gruntjs",
          "HTML5",
          "github",
          "WebServices",
          "Javascript",
        ],
      },
      {
        name: "Interapt",
        type: "Web Developer",
        period: "September 2016 - November 2016",
        image: 'https://interapt.com/wp-content/uploads/2019/05/Interapt_Logo_Final-06.png',
        
        description: `<p>The application for managing medical visits and medical history, Angular 2 and Typescript technology was used, on the server side using Nodejs, Gulp, our day to day was managed through Jira using the SCRUM methodology. The development aims to upgrade the old system to a more modern one</p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "AngularJs",
          "Gitlab",
          "HTML5",
          "Javascript",
          "SASS",
          "SOAP",
        ],
      },
      {
        name: "Scholastic",
        type: "Web Developer",
        period: "September 2017 - July 2022",
        image: 'https://assets.stickpng.com/images/6095151f53a8bf00040ff387.png',
        
        description: `<p> The project consisted of generating sites to advertise books, events and scholastic didactic material, the different sites and games were made on jquery, javascript, angularjs, with the use of PHP for contact forms, our day to day was to consult the pending tasks in Jira using the AGILE methodology. The development aims to create Single page sites to promote products, events, etc., with compatibility in multiple browsers and respecting the designs provided by the Scholastic design and UX team. </p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "AngularJs",
          "Gitlab",
          "HTML5",
          "Javascript",
          "SASS",
          "SOAP",
        ],
      },
      {
        name: "Blackboard Ultra",
        type: "Web Developer",
        period: "September 2014 - August 2015",
        image: 'https://teach.mccc.edu//images/Learn-Ultra-logo.jpg',
        
        description: `<p>Management aplication of courses and learning online named &quot;Ultra-UI&quot;, was an application type SPA(Single Page Aplication), using the technology Angularjs and Typescript, in server side using Nodejs, Gruntjs and Jazminejs (for unit tests), our day to day was managed through Jira using SCRUM methodology. The development is intended to upgrade the old Blackboard System (Learn-Classic) in one new aplication more fresh, dynamic and faster with capacity responsive and cross browsing (Chrome, IE, Safari, Firefox, Opera), compatible with smartphones, tablets and desktop computers. </p>`,
        tech: [
          "Nodejs",
          "Gulpjs",
          "Jazminejs",
          "AngularJs",
          "github",
          "HTML5",
          "Typescript",
          "SASS",
          "Jira",
          "WebServices",
        ],
      },
    ],
    listExperience: '',
  };

  html = `<h2>{title}</h2>
    <div class="title-divider"></div>
    <h3>{subtitle}</h3>
    {description}
    <div class="experience-con">
      <div class="container-sub">
        <div class="full-divider"></div>
        <div class="row">
            {listExperience}
        </div>
      </div>
    </div>
    `;

  listTemplate = `
    <div class="experience-details">
      <div class="col-6">
        <div class="col-3 icon-block">
        <img src="{image}" class="image-project" alt="{image}">
        </div>
        <div class="flot-left">
          <h5>{name}</h5>
          <h4>{type}</h4>
          <span>{period}</span>
        </div>
      </div>
      <div class="col-6">
        {description}
        <b>Technologies:</b>
        {technologies}
      </div>
    </div>
    <div class="full-divider"></div>`;

  getData() {
    this.data.list.forEach((item) => {
      item["technologies"] = item.tech.join(", ");
    });
    this.data.listExperience = this.template.injectInterateData(
      this.listTemplate,
      this.data.list
    );
    return this.template.injectData(this.html, this.data);
  }
}
