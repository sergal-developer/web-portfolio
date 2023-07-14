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
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo-UNAM-escalable.svg/1200px-Escudo-UNAM-escalable.svg.png',
                    name: 'Universisdad Autonoma De Mexico, FES Aragon',
                    carrer: 'Ingenieria en Computación',
                    years: '2008 - 2011'
                },
                {
                    image: 'https://s42509.pcdn.co/wp-content/uploads/2015/08/AngularJS_google.png',
                    name: 'Online courses with certificate',
                    carrer: 'Mastering in Angular',
                    years: '2018'
                },
                {
                    image: 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg',
                    name: 'Online courses with certificate',
                    carrer: 'Mastering in React',
                    years: '2021 - 2022'
                },
                {
                    image: 'data:image/png;base64,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',
                    name: 'Online courses with certificate',
                    carrer: 'Mastering in VUE.js',
                    years: '2021 - 2022'
                },
                {
                    image: 'https://i.blogs.es/ef6f0a/windows_azure/1366_2000.jpg',
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
    <div class="full-divider"></div>`;
    }
    getData() {
        this.data.listEducation = this.template.injectInterateData(this.listTemplate, this.data.list);
        return this.template.injectData(this.html, this.data);
    }
}
