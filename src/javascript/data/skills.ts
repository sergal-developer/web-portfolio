import { Template } from "./template.js"

export class SkillsData {
    constructor() {}
    template = new Template();

    data = {
        title: 'Skills',
        subtitle1: 'Just My Awesome Skills',
        description1: `<p>Sergio started working as a designer and programmer in 2008. During his first years he worked in projects
        with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web development,
        and desktop application development with Microsoft Tecnologies. Sergio acknowledges the benefits of agile
        methodologies to ensure predictive delivery in software projects. He has experience working with Scrum and
        Kanban methods. Additionally, Sergio has a solid background in design patterns, OOP, and software
        architectures for web development. He is on top of the latest trends in web development.</p>`,

        subtitle2: 'Knowledge',
        description2: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet
        vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id
        neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>`,

        subtitle3: 'Language Skills',
        description3: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet
        vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id
        neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>`,

        skills: [
          { name: 'Windows Azure', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Windows Comunication Foundation (WCF)', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Windows Presentation Foundation (WPF)', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Windows Entity Framework', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'LINQ', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'C#', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Web Develop, HTML5 and CSS3', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'SASS, SCSS', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Astro', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Java Script, ECMAScript 6 (ES6)', subtitle: '', description: 'Expert, 10 years', image: '' },
          { name: 'TypeScript', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'jQuery', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'AngularJS & Angular 15', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'React', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'VUEJs', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'ElectronJs', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'SQL Server / SQL Azure', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'Google Firebase', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
          { name: 'MongoDB', subtitle: '', description: 'Expert, 8 years', image: '' },
        ],
        knowledge: [
          { name: `
            <li>Google Analythics &amp; SEO</li>
            <li>Instal and Configure</li>
            <li>E-commerce Platform</li>
            <li>Color theory knowledge</li>` },
          { name: `
            <li>Photo manipulation skills</li>
            <li>Digital Painting</li>
            <li>Photo Composition</li>
            <li>Good sense of Tipography</li>` },
          { name: `
            <li>Web Usability</li>
            <li>Grid &amp; Layout</li>
            <li>Portrait Retouching</li>
            <li>Video Editing</li>` },
        ],
        language: [
          { name: 'English', level: 'A2', percent: '30' },
          { name: 'Spanish', level: 'Native', percent: '100' },
        ],
        
        listSkills: '',
        listKnowledge: '',
        listLanguage: '',
    }

    html = `
    <h2>{title}</h2>
            <div class="title-divider"></div>
            <h3>{subtitle1}</h3>
            {description1}

            <div class="skills-con">
              <div class="container-sub margin-top50">
                <div class="row">
                  {listSkills}
                </div>
              </div>
      
              <div class="full-divider"></div>
              <div class="container-sub skill-list">
                <div class="row">
                  <h3>{subtitle2}</h3>
                  {description2}
                  {listKnowledge}
                </div>
              </div>
              <div class="full-divider"></div>
              <div class="container-sub">
                <div class="row">
                  <h3>{subtitle3}</h3>
                  {listLanguage}
                </div>
              </div>
            </div>
    `;

    listTemplateSkills = `
    <div class="col-6">
      <div class="col-6">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>`;
    listTemplateKnowledge = `
    <div class="col-4 margin-top10">
      <ul>
        {name}
      </ul>
    </div>`;
    listTemplateLanguage = `
    <div class="progressbar-main margin-top50">
      <div class="progress-bar-description">{name} <b>{level}</b></div>
    </div>`;

    getData() {
        this.data.listSkills = this.template.injectInterateData(this.listTemplateSkills, this.data.skills);
        this.data.listKnowledge =  this.template.injectInterateData(this.listTemplateKnowledge, this.data.knowledge);
        this.data.listLanguage =  this.template.injectInterateData(this.listTemplateLanguage, this.data.language);

        return this.template.injectData(this.html, this.data);
    }
}
