import projectsData from './projectsData.js';
import {h, render, Component} from 'https://cdnjs.cloudflare.com/ajax/libs/preact/10.0.0-rc.1/preact.module.js';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);


function collapse(section) {
  section.classList.remove("expanded");
  section.classList.add("collapsed");
  for (let a of section.getElementsByClassName("project")) {
    a.style.display = "none";
  }
}


function expand(section) {
  section.classList.add("expanded");
  section.classList.remove("collapsed");
  for (let a of section.getElementsByClassName("project")) {
    a.style.display = "initial";
  }
}


function toggleVisible(target) {
  let section = target.parentElement;
  if (section.classList.contains("expanded")) {
    collapse(section);
  } else {
    expand(section);
  }
}



function Project({project}) {
  const {title, description, url, image} = project;

  return html`<article class="project">
    <h3 class="project-title">${title}</h3>
    <div class="grid">
      <div class="left project-description">${description}</div>
      <div class="right">
        <a href="${url}">
          <img src=${image} alt="" class="project-image"/>
        </a>
      </div>
    </div>
  </article>
  `
}



class Section extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.setCollapsed = this.setCollapsed.bind(this);
  }

  setCollapsed(collapsed) {
    this.setState({ collapsed });
  }

  render() {
    const {section} = this.props;
    const {title, projects} = section;
    const cssTitle = title.toLowerCase().replace(' ', '-');
    const { collapsed } = this.state;
    return html`<section class="${cssTitle} ${collapsed ? 'collapsed' : 'expanded'}">
      <h2 class="section-title" onClick=${() => this.setCollapsed(!collapsed)}>
          ${title}
       </h2>
      ${collapsed ? null : projects.map(project => html`<${Project} project=${project}/>`)}
     </section>`
  }
}


function Projects() {
  const sections = projectsData.sections;

  return html`
      ${ sections.map(section => html`<${Section} section=${section} />`) }
  `;
}


const target = document.querySelector('.projects-root');
render(html`<${Projects} //>`, target);
