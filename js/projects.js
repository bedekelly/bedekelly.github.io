import projectsData from './projectsData.js';
import {h, render, Component} from './vendor/preact.module.js'
import htm from './vendor/htm.module.js';
const html = htm.bind(h);


const preloadImages = projectsData.sections.map(
  s => s.projects
).flat().map(
  p => p.image
);


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

// <link rel="preload" href=${image} as="image">
function PreloadImage(image) {
  return html`<link rel="preload" href=${image} as="image" />`
}


function PreloadImages({images}) {
  return html`
    ${images.map(PreloadImage)}
  `
}



function Projects() {
  const sections = projectsData.sections;

  return html`
      <${PreloadImages} images=${preloadImages} />
      ${ sections.map(section => html`<${Section} section=${section} />`) }
  `;
}


const target = document.querySelector('.projects-root');
render(html`<${Projects} //>`, target);
