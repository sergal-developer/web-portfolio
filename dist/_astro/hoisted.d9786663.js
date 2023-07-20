class r{constructor(){}injectData(i,l){let t=i;for(const s in l){const e=s;t=t.replaceAll(`{${e}}`,l[s])}return t}injectInterateData(i,l){let t="";return l.forEach(s=>{let e=i;for(const n in s){const o=`{${n}}`;e=e.replace(o,s[n])}t+=e}),t}}class m{constructor(){this.template=new r,this.data={title:"About",name:"Sergio Gallegos",email:"sergio.gallegos@live.com.mx",phone:"52+ 5516322613",birthday:"13 June 1988",nationality:"Mexican",subtitle:"Professional Profile",profileDescription:`<p>
        Sergio started working as a designer and programmer in 2008. During his first years he worked in
        projects with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web
        development, and desktop application development with Microsoft Tecnologies. Sergio acknowledges the
        benefits of agile methodologies to ensure predictive delivery in software projects. He has experience
        working with Scrum and Kanban methods. Additionally, Sergio has a solid background in design patterns,
        OOP, and software architectures for web development. He is on top of the latest trends in web
        development.
        </p>`,sign:"/web-portfolio/asserts/img/signature-web.png",documentUrl:"/web-portfolio/asserts/files/cv.pdf",picture:"/web-portfolio/asserts/img/sergal-front.png"},this.html=`<h2>{title}</h2>
            <div class="title-divider"></div>
            <div class="about-container">
            <div class="divider50">
              <ul>
                <li>Name: {name}</li>
                <li>Email: <a href="mailto:{email}">{email}</a></li>
                <li>Phone: {phone}</li>
                <li>Date of birth: {birthday}</li>
                <li>Nationality: {nationality}</li>
              </ul>
              <h3>{subtitle}</h3>
              {profileDescription}
              <a href="{documentUrl}" target="_blank" class="button">Download resume as PDF format</a>
              <img src="{sign}" class="signature" alt="{sign}">
              </div>
              <div class="divider50 picture">
              <!--
              <img src="{picture}" class="picture-profile" alt="{picture}">
              -->
              </div>
            </div>
    `}getData(){return this.template.injectData(this.html,this.data)}}class c{constructor(){this.template=new r,this.data={title:"Education",subtitle:"Just My Education",description:`<p>Sergio started working as a designer and programmer in 2008. During his first years he worked in projects
        with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web development,
        and desktop application development with Microsoft Tecnologies. Sergio acknowledges the benefits of agile
        methodologies to ensure predictive delivery in software projects. He has experience working with Scrum and
        Kanban methods. Additionally, Sergio has a solid background in design patterns, OOP, and software
        architectures for web development. He is on top of the latest trends in web development.</p>`,list:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo-UNAM-escalable.svg/1200px-Escudo-UNAM-escalable.svg.png",name:"Universisdad Autonoma De Mexico, FES Aragon",carrer:"Ingenieria en Computación",years:"2008 - 2011"},{image:"https://s42509.pcdn.co/wp-content/uploads/2015/08/AngularJS_google.png",name:"Online courses with certificate",carrer:"Mastering in Angular",years:"2018"},{image:"https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",name:"Online courses with certificate",carrer:"Mastering in React",years:"2021 - 2022"},{image:"data:image/png;base64,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",name:"Online courses with certificate",carrer:"Mastering in VUE.js",years:"2021 - 2022"},{image:"https://i.blogs.es/ef6f0a/windows_azure/1366_2000.jpg",name:"Online courses with certificate",carrer:"Microsoft Azure",years:"2010 - 2022"}],listEducation:""},this.html=`<h2>{title}</h2>
    <div class="title-divider"></div>
    <h3>{subtitle}</h3>
    {description}

    <div class="education-con">
      <div class="container-sub">
        <div class="full-divider"></div>
        <div class="row">
          {listEducation}
        </div>
      </div>
    </div>
    `,this.listTemplate=`
    <div class="education-details">
      <div class="col-6 margin-bottom50 margin-top50">
        <div class="col-3 icon-block">
        <img src="{image}" class="image-project" alt="{image}">
        </div>
        <div class="flot-left">
          <h5>{name}</h5>
          <h4>{carrer}</h4>
          <span>{years}</span>
        </div>
      </div>
    </div>
    <div class="full-divider"></div>`}getData(){return this.data.listEducation=this.template.injectInterateData(this.listTemplate,this.data.list),this.template.injectData(this.html,this.data)}}class p{constructor(){this.template=new r,this.data={title:"Experience",subtitle:"14 Years Experience!",description:`<p>
      Since 2008 I started working on blog projects and university exhibitions, understanding information technology more. I ventured into full stack development, mixing backend, frontend and graphic design. This has opened the doors to various projects such as the ones that will be shown below. continuation.
        </p>`,list:[{name:"RockWell Automation",type:"Web Developer",period:"MAR <b>2023</b> - JUL <b>2023</b>",image:"/web-portfolio/asserts/img/rockwell.png",description:"<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"Angular 12"},{name:"Typescript"},{name:"HTML5"},{name:"Jira"},{name:"Jenkins"},{name:"github"},{name:"Javascript"},{name:"SASS"}],listTech:""},{name:"Disney",type:"Web Developer",period:"JUL <b>2022</b> - JUN <b>2023</b>",image:"/web-portfolio/asserts/img/disnep.png",description:"<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"Angular 12"},{name:"Typescript"},{name:"HTML5"},{name:"Jira"},{name:"Jenkins"},{name:"github"},{name:"Javascript"},{name:"SASS"}],listTech:""},{name:"Globant GLOW",type:"Web Developer",period:"SEP <b>2017</b> - JUL <b>2022</b>",image:"/web-portfolio/asserts/img/globant.png",description:"<p>The business management application for managing globers, trips, bonds, permits etc, was a SPA (Single Page Application), using Angular 12 and Typescript technology, on the server side using Nodejs, Gulp, our day to day was managed through Jira using SCRUM methodology. The development aims to upgrade the old system to a more modern and efficient one, as well as support different modules that would directly impact the globers.</p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"Angular 12"},{name:"Typescript"},{name:"HTML5"},{name:"Jira"},{name:"Jenkins"},{name:"github"},{name:"Javascript"},{name:"SASS"}],listTech:""},{name:"DELL EMC",type:"Web Developer",period:"AUG <b>2017</b> - SEP <b>2017</b>",image:"/web-portfolio/asserts/img/dell.png",description:"<p>The customer search and management application, the development was a module of the DELL EMC site, using AngularJs technology and SOAP as information provider, our day to day was managed through an internal ticketing application, using the AGILE methodology. The development consisted in making more efficient the search of customers and present their details in a more comfortable way for consumers.</p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"AngularJs"},{name:"Mercurial SCM"},{name:"HTML5"},{name:"Javascript"},{name:"CSS3"},{name:"SOAP"}],listTech:""},{name:"Zaplabs LLC",type:"Web Developer",period:"APR <b>2017</b> - AUG <b>2017</b>",image:"/web-portfolio/asserts/img/zaplabs.png",description:"<p>The application was a real estate sales site using riot and javascript as frontend technology along with nodejs, our day to day was managed through JIRA using the AGILE methodology. The development consisted of modernizing the client's site prioritizing speed and stability</p>",tech:[{name:"Nodejs"},{name:"GruntJs"},{name:"HTML"},{name:"github"},{name:"CSS3"},{name:"Javascript"},{name:"RIOT"},{name:"SOAP"}],listTech:""},{name:"Ebay, VivaAnuncios",type:"Web Developer",period:"NOV <b>2016</b> - APR <b>2017</b>",image:"/web-portfolio/asserts/img/vivaanuncios.png",description:"<p> The project was to maintain the child site of ebay &ldquo;vivaanuncios.com&rdquo;, the technologies used are: jquery, google maps api, javascript, consuming microservices, our day to day was managed through JIRA using the SCRUM methodology. </p>",tech:[{name:"Nodejs"},{name:"Gruntjs"},{name:"HTML5"},{name:"github"},{name:"WebServices"},{name:"Javascript"}],listTech:""},{name:"Interapt",type:"Web Developer / Backend Developer",period:"SEP <b>2016</b> - NOV <b>2016</b>",image:"/web-portfolio/asserts/img/interapt.png",description:"<p>The application for managing medical visits and medical history, Angular 2 and Typescript technology was used, on the server side using Nodejs, Gulp, our day to day was managed through Jira using the SCRUM methodology. The development aims to upgrade the old system to a more modern one</p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"AngularJs"},{name:"Gitlab"},{name:"HTML5"},{name:"Javascript"},{name:"SASS"},{name:"SOAP"}],listTech:""},{name:"Scholastic",type:"Web Developer / Backend Developer",period:"SEP <b>2015</b> - JUL <b>2016</b>",image:"/web-portfolio/asserts/img/scholastic.png",description:"<p> The project consisted of generating sites to advertise books, events and scholastic didactic material, the different sites and games were made on jquery, javascript, angularjs, with the use of PHP for contact forms, our day to day was to consult the pending tasks in Jira using the AGILE methodology. The development aims to create Single page sites to promote products, events, etc., with compatibility in multiple browsers and respecting the designs provided by the Scholastic design and UX team. </p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"AngularJs"},{name:"Gitlab"},{name:"HTML5"},{name:"Javascript"},{name:"SASS"},{name:"SOAP"}],listTech:""},{name:"Blackboard",type:"Web Developer",period:"SEP <b>2014</b> - AUG <b>2015</b>",image:"/web-portfolio/asserts/img/blackboard.png",description:"<p>Management aplication of courses and learning online named &quot;Ultra-UI&quot;, was an application type SPA(Single Page Aplication), using the technology Angularjs and Typescript, in server side using Nodejs, Gruntjs and Jazminejs (for unit tests), our day to day was managed through Jira using SCRUM methodology. The development is intended to upgrade the old Blackboard System (Learn-Classic) in one new aplication more fresh, dynamic and faster with capacity responsive and cross browsing (Chrome, IE, Safari, Firefox, Opera), compatible with smartphones, tablets and desktop computers. </p>",tech:[{name:"Nodejs"},{name:"Gulpjs"},{name:"Jazminejs"},{name:"AngularJs"},{name:"github"},{name:"HTML5"},{name:"Typescript"},{name:"SASS"},{name:"Jira"},{name:"WebServices"}],listTech:""}],listExperience:""},this.html=`<h2>{title}</h2>
    <div class="title-divider"></div>
    <h3>{subtitle}</h3>
    {description}

    <div class="full-divider"></div>
    <ul class="timeline">
      {listExperience}
    </ul>
    `,this.listTemplate=`
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
  </li>`,this.listTemplateTech="<div>{name}</div>"}getData(){return this.data.list.forEach(i=>{i.listTech=this.template.injectInterateData(this.listTemplateTech,i.tech)}),this.data.listExperience=this.template.injectInterateData(this.listTemplate,this.data.list),this.template.injectData(this.html,this.data)}}class g{constructor(){this.template=new r,this.data={title:"Hello, I'm ",name:"Sergio Gallegos",position:"Frontend Developer / Backend Developer"},this.html=`<div class="hero">
    <div class="text">
      <div class="static">
        <h2>
          <span>{title}</span><br>
          {name}
        </h2>
        <span class="title shimmer">
          {position}
        </span>
      </div>
    </div>
  </div>
    `}getData(){return this.template.injectData(this.html,this.data)}}class h{constructor(){this.template=new r,this.data={title:"Portfolio",subtitle:"Just My Work",description:`<p>Sergio started working as a designer and programmer in 2008. During his first years he worked in projects
      with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web development,
      and desktop application development with Microsoft Tecnologies. Sergio acknowledges the benefits of agile
      methodologies to ensure predictive delivery in software projects. He has experience working with Scrum and
      Kanban methods. Additionally, Sergio has a solid background in design patterns, OOP, and software
      architectures for web development. He is on top of the latest trends in web development.</p>`,list:[{image:"https://help.blackboard.com/sites/default/files/images/2019-04/original_course_view_0.png",name:"Ultra UI",description:"Ingenieria en Computación",years:"2008 - 2011"},{image:"https://www.muycomputerpro.com/wp-content/uploads/2023/02/gobant-2.jpeg",name:"Glow",description:"Mastering in Angular",years:"2018"},{image:"https://www.infobae.com/new-resizer/lrtPUyzL_l14Q0YGp_TT-JJhHuU=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2SDH2CJ7JRFFBAZHJTI6FTEBUU.jpg",name:"Incident Maps USA Emmbasy",description:"Mastering in React",years:"2021 - 2022"},{image:"https://actus.adrisa.com.mx/File/Storage.ashx?img=Diapositiva03max.jpg",name:"Actus Security",description:"Mastering in VUE.js",years:"2021 - 2022"},{image:"https://www.huntleylibrary.org/wp-content/uploads/2021/05/ScienceFlix-in-action.jpg",name:"Scholastic",description:"Microsoft Azure",years:"2010 - 2022"}],listPortfolio:""},this.html=`
  `,this.listTemplate=`
  <div class="education-details">
    <div class="col-6 margin-bottom50 margin-top50">
      <div class="col-3 icon-block">
      <img src="{image}" class="image-project" alt="{image}">
      </div>
      <div class="flot-left">
        <h5>{name}</h5>
        <h4>{description}</h4>
        <span>{years}</span>
      </div>
    </div>
  </div>
  <div class="full-divider"></div>`}getData(){return this.data.listPortfolio=this.template.injectInterateData(this.listTemplate,this.data.list),this.data.listPortfolio="<h1>Under Construction ...</h1>",this.template.injectData(this.html,this.data)}}class u{constructor(){this.template=new r,this.data={title:"Skills & Education",subtitle1:"Just My Skills",description1:"<p>Since 2008 I have developed knowledge in design, and programming oriented to backend and frontend, besides that I have worked under Scrum and Kanban methodologies, managed code using git scm in github and gitlab below I show you what technologies I have worked throughout these wonderful years.</p>",subtitle2:"Just My Education",description2:`<p>I studied at the Universidad Autonoma de México, 
    in the Faculty of Higher Education Aragon (FES Aragon), from 2008 to 2011 where I graduated as a Computer Engineer, 
    throughout my career I have updated myself in edge technologies, 
    I have taken courses at Microsoft offices and courses on virtual way using digital platforms, 
    all this knowledge is reflected in the success of the projects in which I participate.</p>`,subtitle3:"Soft & Hard Skills",description3:"",skillsTitleDesign:"Design",skillsTitleFrontEnd:"FrontEnd",skillsTitleBackend:"Backend",skillsTitleAdmin:"Admin",skills:[{name:"Windows Azure",level:1,years:"4",image:"/web-portfolio/asserts/img/azure.png",levelHtml:"",type:"backend"},{name:"Windows .NET Services",level:2,years:"8",image:"/web-portfolio/asserts/img/css.png",levelHtml:"",type:"backend"},{name:"C#",level:3,years:"8",image:"/web-portfolio/asserts/img/csharp.png",levelHtml:"",type:"backend"},{name:"HTML5",level:3,years:"14",image:"/web-portfolio/asserts/img/html.png",levelHtml:"",type:"frontend"},{name:"CSS3",level:3,years:"14",image:"/web-portfolio/asserts/img/css.png",levelHtml:"",type:"frontend"},{name:"SASS, SCSS",level:3,years:"8",image:"/web-portfolio/asserts/img/sass.png",levelHtml:"",type:"frontend"},{name:"Astro",level:1,years:"1",image:"/web-portfolio/asserts/img/astro.png",levelHtml:"",type:"frontend"},{name:"Java Script, ECMAScript 6 (ES6)",level:3,years:"14",image:"/web-portfolio/asserts/img/javascript.png",levelHtml:"",type:"frontend"},{name:"TypeScript",level:3,years:"9",image:"/web-portfolio/asserts/img/typescript.png",levelHtml:"",type:"frontend"},{name:"TypeScript",level:3,years:"9",image:"/web-portfolio/asserts/img/typescript.png",levelHtml:"",type:"backend"},{name:"jQuery",level:3,years:"10",image:"/web-portfolio/asserts/img/jquery.png",levelHtml:"",type:"frontend"},{name:"AngularJS & Angular 15",level:3,years:"8",image:"/web-portfolio/asserts/img/angular.png",levelHtml:"",type:"frontend"},{name:"React",level:1,years:"1",image:"/web-portfolio/asserts/img/react.png",levelHtml:"",type:"frontend"},{name:"VUEJs",level:1,years:"1",image:"/web-portfolio/asserts/img/vue.png",levelHtml:"",type:"frontend"},{name:"ElectronJs",level:2,years:"3",image:"/web-portfolio/asserts/img/electron.png",levelHtml:"",type:"frontend"},{name:"SQL Server / SQL Azure",level:2,years:"5",image:"/web-portfolio/asserts/img/sql.png",levelHtml:"",type:"backend"},{name:"MongoDB",level:2,years:"3",image:"/web-portfolio/asserts/img/mongodb.png",levelHtml:"",type:"backend"},{name:"Google Firebase",level:1,years:"1",image:"/web-portfolio/asserts/img/firebase.png",levelHtml:"",type:"backend"},{name:"Google Analytics",level:2,years:"5",image:"/web-portfolio/asserts/img/analytics.png",levelHtml:"",type:"admin"},{name:"Jazmine UnitTest",level:3,years:"8",image:"/web-portfolio/asserts/img/jazminejs.png",levelHtml:"",type:"frontend"},{name:"Karma UnitTest",level:3,years:"8",image:"/web-portfolio/asserts/img/karma.png",levelHtml:"",type:"frontend"},{name:"Github",level:3,years:"14",image:"/web-portfolio/asserts/img/github.png",levelHtml:"",type:"admin"},{name:"Jira",level:2,years:"8",image:"/web-portfolio/asserts/img/jira.png",levelHtml:"",type:"admin"},{name:"Confluence",level:1,years:"7",image:"/web-portfolio/asserts/img/confluence.png",levelHtml:"",type:"admin"},{name:"NodeJS",level:2,years:"8",image:"/web-portfolio/asserts/img/nodejs.png",levelHtml:"",type:"backend"},{name:"Adobe Photoshop",level:2,years:"4",image:"/web-portfolio/asserts/img/adobephotoshop.png",levelHtml:"",type:"design"},{name:"Adobe Ilustrator",level:2,years:"4",image:"/web-portfolio/asserts/img/adobeilustrator.png",levelHtml:"",type:"design"},{name:"Adobe XD",level:2,years:"3",image:"/web-portfolio/asserts/img/adobexd.png",levelHtml:"",type:"design"},{name:"Figma",level:2,years:"1",image:"/web-portfolio/asserts/img/figma.png",levelHtml:"",type:"design"},{name:"Microsoft Expression",level:2,years:"8",image:"/web-portfolio/asserts/img/expression.png",levelHtml:"",type:"design"}],softSkills:[{name:"Communication",level:"Advanced",value:80},{name:"Flexibility",level:"Expert",value:100},{name:"Leadership",level:"Advanced",value:80},{name:"Motivation",level:"Expert",value:100},{name:"Innovation",level:"Expert",value:100},{name:"problem solving ability",level:"Expert",value:100},{name:"Teamwork",level:"Expert",value:100}],hardSkills:[{name:"English",level:"A2",value:30},{name:"Español",level:"Native",value:100},{name:"Logical thinking",level:"Expert",value:100},{name:"Management tools",level:"Advanced",value:80},{name:"Programming in different areas (Backend, Frontend)",level:"Expert",value:100},{name:"Design and prototyping skills",level:"Advanced",value:90}],education:[{image:"",name:"Universisdad Autonoma De Mexico, FES Aragon",carrer:"Ingenieria en Computación",years:"2008 - 2011"},{image:"",name:"Certification",carrer:"Microsoft Azure",years:"2010 - 2011"},{image:"",name:"Online course",carrer:"Mastering in Angular",years:"2018"},{image:"",name:"Online course",carrer:"Mastering in React",years:"2021 - 2022"},{image:"",name:"Online course",carrer:"Mastering in VUE.js",years:"2021 - 2022"}],listSkillsDesign:"",listSkillsFrontend:"",listSkillsBackend:"",listSkillsAdmin:"",listEducation:"",listSoftSkills:"",listHardSkills:""},this.html=`
    <h2>{title}</h2>
            <div class="title-divider"></div>

            <div class="row">
                <h3>{subtitle2}</h3>
                {description2}
                <br>
                <br>

                <div class="list-container">
                  {listEducation}
                </div>
            </div>

            <div class="full-divider"></div> 

            <div class="row">
              <h3>{subtitle3}</h3>
              <br>
                <br>
              
              <div class="list-container">
                <div class="skills-collection">
                <h4>Soft Skills</h4>
                <br>
                {listSoftSkills}
                </div>
                <div class="skills-collection">
                <h4>Hard Skills</h4>
                
                <br>
                {listHardSkills}
                </div>
              </div>
            </div>

            <div class="full-divider"></div>
            
            <h3>{subtitle1}</h3>
            {description1}

            <h3>{skillsTitleDesign}</h3>

            <div class="list-section">
              {listSkillsDesign}
            </div>

            <div class="full-divider"></div>
            <h3>{skillsTitleFrontEnd}</h3>

            <div class="list-section">
              {listSkillsFrontend}
            </div>

            <div class="full-divider"></div>
            <h3>{skillsTitleBackend}</h3>

            <div class="list-section">
              {listSkillsBackend}
            </div>

            <div class="full-divider"></div>
            <h3>{skillsTitleAdmin}</h3>

            <div class="list-section">
              {listSkillsAdmin}
            </div>
    `,this.listTemplateSkills=`
    <div class="list-item">
      <div class="overlay">
        <div class="name">{name}</div>

        <div class="level-experience">
          <span>{years} </span> Years EXP.
        </div>

        <div class="level-knowledge">
          {levelHtml}
        </div>
      </div>
      
      <div class="picture">
        <img src="{image}" alt="{image}">
      </div>
    </div>
    `,this.listTempleteSkillsLevels=['<div class="lvl"><span>rookie</span></div>','<div class="lvl"><span>intermediate</span></div>','<div class="lvl"><span>advanced</span></div>','<div class="lvl"><span>master</span></div>'],this.listTemplateEducation=`
  <div class="education-details">
        <h5>{name}</h5>
        <h4>{carrer}</h4>
        <span>{years}</span>
  </div>`,this.listTemplateLanguage=`
    <div class="item-skill">
      <div class="name">{name} <b>{level}</b></div>
      <div class="progressbar">
        <div class="progressbar-indicator" style="width: {value}%"></div>
      </div>
    </div>`}getData(){const i=[],l=[],t=[],s=[];return this.data.skills.forEach(e=>{const n=Object.create(this.listTempleteSkillsLevels);for(let o=0;o<e.level+1;o++)n[o]=n[o].replace('class="lvl"','class="lvl fill"');n[e.level]=n[e.level].replace('class="lvl fill"','class="lvl current"'),e.levelHtml=n.join(""),e.type.toLowerCase()==="frontend"&&l.push(e),e.type.toLowerCase()==="design"&&i.push(e),e.type.toLowerCase()==="backend"&&t.push(e),e.type.toLowerCase()==="admin"&&s.push(e)}),this.data.listSkillsFrontend=this.template.injectInterateData(this.listTemplateSkills,l),this.data.listSkillsDesign=this.template.injectInterateData(this.listTemplateSkills,i),this.data.listSkillsBackend=this.template.injectInterateData(this.listTemplateSkills,t),this.data.listSkillsAdmin=this.template.injectInterateData(this.listTemplateSkills,s),this.data.listEducation=this.template.injectInterateData(this.listTemplateEducation,this.data.education),this.data.listSoftSkills=this.template.injectInterateData(this.listTemplateLanguage,this.data.softSkills),this.data.listHardSkills=this.template.injectInterateData(this.listTemplateLanguage,this.data.hardSkills),this.template.injectData(this.html,this.data)}}class d{constructor(){this.frameCollector=null,this.inNavigation=!1,this.currentPage=0,this.transitionDurationFrame=1e3,this.frameName=".page-frame-container",this.frameContainerName=".pfc-area",this.frameContainerWidth="width: calc(100%);",this.frameItemsName=".pfc-area > .item",this.linksName=".navbar .item.page",this.navbarName=".navbar",this.shapesName=".shapes",this.navBar=null,this.frameContainer=null,this.currentPageClass="home",this.shapesContainer=null,this.data={home:new g,about:new m,skills:new u,experience:new p,education:new c,portfolio:new h}}init(){this.setupEvents()}setupEvents(){this.navBar=document.querySelector(this.navbarName),this.frameCollector=document.querySelector(this.frameName),this.frames=document.querySelectorAll(this.frameItemsName),this.links=document.querySelectorAll(this.linksName),this.frameContainer=document.querySelector(this.frameContainerName),this.frameContainerWidth=`width: calc(100% * ${this.frames.length});`,this.frameContainer?.setAttribute("style",`${this.frameContainerWidth}`),this.shapesContainer=document.querySelector(this.shapesName),this.links.forEach((t,s)=>{t.addEventListener("click",e=>{this.gotoPage(s,t),document.querySelector("#navbar-menu")?.classList.remove("show")})});const i=document.querySelector("#navbar-menu");document.querySelector("#navbar-menu-button")?.addEventListener("click",t=>{i?.classList.contains("show")?i?.classList.remove("show"):i?.classList.add("show")})}gotoPage(i,l){if(this.inNavigation||this.currentPage===i)return;this.inNavigation=!0,this.currentPage=i;const t=l.getAttribute("data-class");console.log("dataClass: ",t);const s=`-${100*i}%`,e=`transition-duration: ${this.transitionDurationFrame}ms;`,n=`margin-left: ${s};`;this.frameContainer?.setAttribute("style",`${this.frameContainerWidth}${e}${n}`),t&&(this.frameContainer?.classList.replace(this.currentPageClass,t),this.shapesContainer?.classList.replace(this.currentPageClass,t),this.currentPageClass=t),this.frameContainer?.classList.add("moveOn"),setTimeout(()=>{this.frameContainer?.classList.remove("moveOn"),this.inNavigation=!1},this.transitionDurationFrame),this.currentPage!==0?this.navBar?.classList.contains("collapsed")||this.navBar?.classList.add("collapsed"):this.navBar?.classList.remove("collapsed")}setupData(){document.querySelector("#home"),document.querySelector("#about"),document.querySelector("#skills"),document.querySelector("#experience"),document.querySelector("#portfolio")}}try{const a=new d;window.onload=()=>a.init()}catch(a){console.log("error: ",a)}const v=new d;window.onload=a=>{v.init(),console.log("loaded!")};
