import { Template } from "./template.js";
export class HomeData {
    constructor() {
        this.template = new Template();
        this.data = {
            title: 'Hello, I\'m ',
            name: 'Sergio Gallegos',
            position: 'Frontend Developer / Backend Developer',
        };
        this.html = `<div class="hero">
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
    `;
    }
    getData() {
        return this.template.injectData(this.html, this.data);
    }
}
