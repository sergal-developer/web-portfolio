import { Template } from "./template.js";
export class EducationData {
    constructor() {
        this.template = new Template();
        this.data = {
            title: 'Education',
            subtitle: 'Just My Education',
            description: `<p>Sergio started working as a designer and programmer in 2008. During his first years he worked in projects
        with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web development,
        and desktop application development with Microsoft Tecnologies. Sergio acknowledges the benefits of agile
        methodologies to ensure predictive delivery in software projects. He has experience working with Scrum and
        Kanban methods. Additionally, Sergio has a solid background in design patterns, OOP, and software
        architectures for web development. He is on top of the latest trends in web development.</p>`,
            list: [
                {
                    name: 'Universisdad Autonoma De Mexico, FES Aragon',
                    carrer: 'Ingenieria en Computación',
                    years: '2008 - 2011'
                },
                {
                    name: 'Online courses with certificate',
                    carrer: 'Mastering in Angular',
                    years: '2018'
                },
                {
                    name: 'Online courses with certificate',
                    carrer: 'Mastering in React',
                    years: '2021 - 2022'
                },
                {
                    name: 'Online courses with certificate',
                    carrer: 'Mastering in VUE.js',
                    years: '2021 - 2022'
                },
                {
                    name: 'Online courses with certificate',
                    carrer: 'Microsoft Azure',
                    years: '2010 - 2022'
                }
            ],
            listEducation: '',
        };
        this.html = `<h2>{title}</h2>
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
    `;
        this.listTemplate = `
    <div class="education-details">
      <div class="col-6 margin-bottom50 margin-top50">
        <div class="col-3 icon-block"><i class="fa-solid fa-camera"></i></div>
        <div class="flot-left">
          <h5>{name}</h5>
          <h4>{carrer}</h4>
          <span>{years}</span>
        </div>
      </div>
    </div>
    <div class="full-divider"></div>`;
    }
    getData() {
        this.data.listEducation = this.template.injectInterateData(this.listTemplate, this.data.list);
        return this.template.injectData(this.html, this.data);
    }
}
