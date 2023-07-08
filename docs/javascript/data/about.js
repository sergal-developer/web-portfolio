import { Template } from "./template.js";
export class AboutData {
    constructor() {
        this.template = new Template();
        this.data = {
            title: 'About',
            name: 'Sergio Gallegos',
            email: 'sergio.gallegos@live.com.mx',
            phone: '52+ 5516322613',
            birthday: '13 June 1988',
            nationality: 'Mexican',
            subtitle: 'Professional Profile',
            profileDescription: `<p>
        Sergio started working as a designer and programmer in 2008. During his first years he worked in
        projects with technologies such as: JS, and ASP. In addition, he honed skills in graphic design, web
        development, and desktop application development with Microsoft Tecnologies. Sergio acknowledges the
        benefits of agile methodologies to ensure predictive delivery in software projects. He has experience
        working with Scrum and Kanban methods. Additionally, Sergio has a solid background in design patterns,
        OOP, and software architectures for web development. He is on top of the latest trends in web
        development.
        </p>`,
            sign: '/asserts/img/signature-web.png',
            documentUrl: '/asserts/img/signature-web.png',
            picture: '/asserts/img/sergal-front.png'
        };
        this.html = `<h2>{title}</h2>
            <div class="title-divider"></div>
            <div class="about-con">
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
              <img src="{picture}" class="picture-profile" alt="{picture}">
              </div>
            </div>
    `;
    }
    getData() {
        return this.template.injectData(this.html, this.data);
    }
}
