import { Template } from "./template.js";

export class SkillsData {
  constructor() {}
  template = new Template();

  data = {
    title: "Skills & Education",
    
    subtitle1: "Just My Skills",
    description1: `<p>Since 2008 I have developed knowledge in design, and programming oriented to backend and frontend, besides that I have worked under Scrum and Kanban methodologies, managed code using git scm in github and gitlab below I show you what technologies I have worked throughout these wonderful years.</p>`,

    subtitle2: 'Just My Education',
    description2: `<p>I studied at the Universidad Autonoma de México, 
    in the Faculty of Higher Education Aragon (FES Aragon), from 2008 to 2011 where I graduated as a Computer Engineer, 
    throughout my career I have updated myself in edge technologies, 
    I have taken courses at Microsoft offices and courses on virtual way using digital platforms, 
    all this knowledge is reflected in the success of the projects in which I participate.</p>`,
        

    subtitle3: "Soft & Hard Skills",
    description3: ``,

    skillsTitleDesign: "Design",
    skillsTitleFrontEnd: "FrontEnd",
    skillsTitleBackend: "Backend",
    skillsTitleAdmin: "Admin",

    skills: [
      { name: "Windows Azure", level: 1, years: "4", image: "/web-portfolio/asserts/img/azure.png", levelHtml: "",
        type: 'backend'
      },
      { name: "Windows .NET Services", level: 2, years: "8", image: "/web-portfolio/asserts/img/css.png", levelHtml: "",
        type: 'backend'
      },
      { name: "C#", level: 3, years: "8", image: "/web-portfolio/asserts/img/csharp.png", levelHtml: "",
        type: 'backend'
      },
      { name: "HTML5", level: 3, years: "14", image: "/web-portfolio/asserts/img/html.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "CSS3", level: 3, years: "14", image: "/web-portfolio/asserts/img/css.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "SASS, SCSS", level: 3, years: "8", image: "/web-portfolio/asserts/img/sass.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "Astro", level: 1, years: "1", image: "/web-portfolio/asserts/img/astro.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "Java Script, ECMAScript 6 (ES6)", level: 3, years: "14", image: "/web-portfolio/asserts/img/javascript.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "TypeScript", level: 3, years: "9", image: "/web-portfolio/asserts/img/typescript.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "TypeScript", level: 3, years: "9", image: "/web-portfolio/asserts/img/typescript.png", levelHtml: "",
        type: 'backend'
      },
      { name: "jQuery", level: 3, years: "10", image: "/web-portfolio/asserts/img/jquery.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "AngularJS & Angular 15", level: 3, years: "8", image: "/web-portfolio/asserts/img/angular.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "React", level: 1, years: "1", image: "/web-portfolio/asserts/img/react.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "VUEJs", level: 1, years: "1", image: "/web-portfolio/asserts/img/vue.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "ElectronJs", level: 2, years: "3", image: "/web-portfolio/asserts/img/electron.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "SQL Server / SQL Azure", level: 2, years: "5", image: "/web-portfolio/asserts/img/sql.png", levelHtml: "",
        type: 'backend'
      },
      { name: "MongoDB", level: 2, years: "3", image: "/web-portfolio/asserts/img/mongodb.png", levelHtml: "",
        type: 'backend'
      },
      { name: "Google Firebase", level: 1, years: "1", image: "/web-portfolio/asserts/img/firebase.png", levelHtml: "",
        type: 'backend'
      },
      { name: "Google Analytics", level: 2, years: "5", image: "/web-portfolio/asserts/img/analytics.png", levelHtml: "",
        type: 'admin'
      },
      { name: "Jazmine UnitTest", level: 3, years: "8", image: "/web-portfolio/asserts/img/jazminejs.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "Karma UnitTest", level: 3, years: "8", image: "/web-portfolio/asserts/img/karma.png", levelHtml: "",
        type: 'frontend'
      },
      { name: "Github", level: 3, years: "14", image: "/web-portfolio/asserts/img/github.png", levelHtml: "",
        type: 'admin'
      },
      { name: "Jira", level: 2, years: "8", image: "/web-portfolio/asserts/img/jira.png", levelHtml: "",
        type: 'admin'
      },
      { name: "Confluence", level: 1, years: "7", image: "/web-portfolio/asserts/img/confluence.png", levelHtml: "",
        type: 'admin'
      },
      { name: "NodeJS", level: 2, years: "8", image: "/web-portfolio/asserts/img/nodejs.png", levelHtml: "",
        type: 'backend'
      },
      { name: "Adobe Photoshop", level: 2, years: "4", image: "/web-portfolio/asserts/img/adobephotoshop.png", levelHtml: "",
        type: 'design'
      },
      { name: "Adobe Ilustrator", level: 2, years: "4", image: "/web-portfolio/asserts/img/adobeilustrator.png", levelHtml: "",
        type: 'design'
      },
      { name: "Adobe XD", level: 2, years: "3", image: "/web-portfolio/asserts/img/adobexd.png", levelHtml: "",
        type: 'design'
      },
      { name: "Figma", level: 2, years: "1", image: "/web-portfolio/asserts/img/figma.png", levelHtml: "",
        type: 'design'
      },
      { name: "Microsoft Expression", level: 2, years: "8", image: "/web-portfolio/asserts/img/expression.png", levelHtml: "",
        type: 'design'
      },
    ],

    softSkills: [
      { name: 'Communication', level: 'Advanced', value: 80 },
      { name: 'Flexibility', level: 'Expert', value: 100 },
      { name: 'Leadership', level: 'Advanced', value: 80 },
      { name: 'Motivation', level: 'Expert', value: 100 },
      { name: 'Innovation', level: 'Expert', value: 100 },
      { name: 'problem solving ability', level: 'Expert', value: 100 },
      { name: 'Teamwork', level: 'Expert', value: 100 },
    ],

    hardSkills: [
      { name: 'English', level: 'A2', value: 30 },
      { name: 'Español', level: 'Native', value: 100 },
      { name: 'Logical thinking', level: 'Expert', value: 100 },
      { name: 'Management tools', level: 'Advanced', value: 80 },
      { name: 'Programming in different areas (Backend, Frontend)', level: 'Expert', value: 100 },
      { name: 'Design and prototyping skills', level: 'Advanced', value: 90 },
    ],

    education: [
      {
        image: '',
        name: 'Universisdad Autonoma De Mexico, FES Aragon',
        carrer: 'Ingenieria en Computación',
        years: '2008 - 2011'
      }, 
      {
        image: '',
          name: 'Certification',
          carrer: 'Microsoft Azure',
          years: '2010 - 2011'
      },
      {
        image: '',
          name: 'Online course',
          carrer: 'Mastering in Angular',
          years: '2018'
      }, 
      {
        image: '',
          name: 'Online course',
          carrer: 'Mastering in React',
          years: '2021 - 2022'
      },
      {
        image: '',
          name: 'Online course',
          carrer: 'Mastering in VUE.js',
          years: '2021 - 2022'
      }
    ],

    listSkillsDesign: "",
    listSkillsFrontend: "",
    listSkillsBackend: "",
    listSkillsAdmin: "",
    listEducation: "",
    listSoftSkills: "",
    listHardSkills: "",
  };

  html = `
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
    `;

  listTemplateSkills = `
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
    `;

  listTempleteSkillsLevels = [
    `<div class="lvl"><span>rookie</span></div>`,
    `<div class="lvl"><span>intermediate</span></div>`,
    `<div class="lvl"><span>advanced</span></div>`,
    `<div class="lvl"><span>master</span></div>`,
  ];

  listTemplateEducation = `
  <div class="education-details">
        <h5>{name}</h5>
        <h4>{carrer}</h4>
        <span>{years}</span>
  </div>`;

  listTemplateLanguage = `
    <div class="item-skill">
      <div class="name">{name} <b>{level}</b></div>
      <div class="progressbar">
        <div class="progressbar-indicator" style="width: {value}%"></div>
      </div>
    </div>`;

  getData() {
    const listSkillsDesign = [];
    const listSkillsFrontend = [];
    const listSkillsBackend = [];
    const listSkillsAdmin = [];

    this.data.skills.forEach((s) => {
      const template = Object.create(this.listTempleteSkillsLevels);
      
      for (let i = 0; i < s.level + 1; i++) {
        template[i] = template[i].replace(
          'class="lvl"',
          'class="lvl fill"'
        );
      }

      template[s.level] = template[s.level].replace(
        'class="lvl fill"',
        'class="lvl current"'
      );

      s.levelHtml = template.join("");
      if ( s.type.toLowerCase() === 'frontend' ) { listSkillsFrontend.push (s); }
      if ( s.type.toLowerCase() === 'design' ) { listSkillsDesign.push (s); }
      if ( s.type.toLowerCase() === 'backend' ) { listSkillsBackend.push (s); }
      if ( s.type.toLowerCase() === 'admin' ) { listSkillsAdmin.push (s); }
    });

    this.data.listSkillsFrontend = this.template.injectInterateData(
      this.listTemplateSkills,
      listSkillsFrontend
    );
    this.data.listSkillsDesign = this.template.injectInterateData(
      this.listTemplateSkills,
      listSkillsDesign
    );
    this.data.listSkillsBackend = this.template.injectInterateData(
      this.listTemplateSkills,
      listSkillsBackend
    );
    this.data.listSkillsAdmin = this.template.injectInterateData(
      this.listTemplateSkills,
      listSkillsAdmin
    );

    this.data.listEducation = this.template.injectInterateData(
      this.listTemplateEducation,
      this.data.education
    );
    this.data.listSoftSkills = this.template.injectInterateData(
      this.listTemplateLanguage,
      this.data.softSkills
    );
    this.data.listHardSkills = this.template.injectInterateData(
      this.listTemplateLanguage,
      this.data.hardSkills
    );

    return this.template.injectData(this.html, this.data);
  }
}
