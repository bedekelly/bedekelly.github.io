import projectsData from '/js/projectsData.js';
import {h, render, Component} from './vendor/preact.module.js'
import htm from './vendor/htm.module.js';
const html = htm.bind(h);


const preloadImages = projectsData.sections.map(
  s => (s.projects || [])
).flat().map(
  p => p.image
).filter(link => !!link);


function Project({project}) {
  const {title, description, url, image, video, youtube, type} = project;

  return html`<article class="project ${type}">
    <h3 class="project-title">${title}</h3>
    <div class="grid">
    ${ image && html`
      <div class="left project-description">${description}</div>
      <div class="right">
        <a href="${url}">
          <img src=${image} alt="" class="project-image"/>
        </a>
      </div>` }
    ${ video && html`
        <div class="left">
            <video width="480" height="480" playsinline class="feature-video" controls>
                <source src="${video}" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="right project-description">
          ${description}
        </div>
    ` }
    ${ youtube && html`
      <div class="left">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtube}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="right project-description">
        ${description}
      </div>
    ` }
    </div>
  </article>
  `
}


function Feature({ type, url, title, description }) {
  if (type === 'video') {
    return html`
      ${ title && html`<h3 class="project-title">${ title }</h3>` }
      ${ description && html`<p>${ description }</p>` }
      <video width="720" height="720" playsinline class="feature-video" controls>
        <source src=${url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     `;
  }
  return html`<p>Feature type not found.</p>`;
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
    const { section } = this.props;
    const { title, projects, feature } = section;
    const contents = projects ?
      projects.map(project => html`<${Project} project=${project}/>`)
      : html`<${Feature} ...${feature} />`;
    const cssTitle = title.toLowerCase().replace(' ', '-');
    const { collapsed } = this.state;
    return html`<section class="${cssTitle} ${collapsed ? 'collapsed' : 'expanded'}">
      <h2 class="section-title" onClick=${() => this.setCollapsed(!collapsed)}>
          ${title}
       </h2>
      ${ collapsed ? null : contents }
     </section>`
  }
}


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
