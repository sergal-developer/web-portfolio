import { Template } from "./template.js";
export class PortfolioData {
    constructor() {
        this.template = new Template();
        this.data = {
            title: "Portfolio",
            subtitle: "Just My Work",
            description: `<p>Sergio started working as a designer and programmer in 2008. During his first years he worked in projects
      with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web development,
      and desktop application development with Microsoft Tecnologies. Sergio acknowledges the benefits of agile
      methodologies to ensure predictive delivery in software projects. He has experience working with Scrum and
      Kanban methods. Additionally, Sergio has a solid background in design patterns, OOP, and software
      architectures for web development. He is on top of the latest trends in web development.</p>`,
            list: [
                {
                    image: "https://help.blackboard.com/sites/default/files/images/2019-04/original_course_view_0.png",
                    name: "Ultra UI",
                    description: "Ingenieria en Computación",
                    years: "2008 - 2011",
                },
                {
                    image: "https://www.muycomputerpro.com/wp-content/uploads/2023/02/gobant-2.jpeg",
                    name: "Glow",
                    description: "Mastering in Angular",
                    years: "2018",
                },
                {
                    image: "https://www.infobae.com/new-resizer/lrtPUyzL_l14Q0YGp_TT-JJhHuU=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2SDH2CJ7JRFFBAZHJTI6FTEBUU.jpg",
                    name: "Incident Maps USA Emmbasy",
                    description: "Mastering in React",
                    years: "2021 - 2022",
                },
                {
                    image: "https://actus.adrisa.com.mx/File/Storage.ashx?img=Diapositiva03max.jpg",
                    name: "Actus Security",
                    description: "Mastering in VUE.js",
                    years: "2021 - 2022",
                },
                {
                    image: "https://www.huntleylibrary.org/wp-content/uploads/2021/05/ScienceFlix-in-action.jpg",
                    name: "Scholastic",
                    description: "Microsoft Azure",
                    years: "2010 - 2022",
                },
            ],
            listPortfolio: "",
        };
        this.html = `
  `;
        this.listTemplate = `
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
  <div class="full-divider"></div>`;
    }
    getData() {
        this.data.listPortfolio = this.template.injectInterateData(this.listTemplate, this.data.list);
        this.data.listPortfolio = "<h1>Under Construction ...</h1>";
        return this.template.injectData(this.html, this.data);
    }
}
