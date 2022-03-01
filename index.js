/* eslint-disable no-unused-vars */
window.dataLayer = window.dataLayer || [];
function gtag(...args) { window.dataLayer.push(args); }
gtag('js', new Date());
gtag('config', 'G-ES0LN8KC8W');

const projects = [
  {
    id: 1,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project1.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',

  },
  {
    id: 2,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project1.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',

  },
  {
    id: 3,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project1.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',

  },
  {
    id: 4,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project1.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',

  },
  {
    id: 5,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project1.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',

  },
];
document.onload = (params) => {
  const workSection = document.getElementById('Portoflio');
  projects.forEach((project) => {
    const projectHTML = ` <div class="work-card">
                                <img src="${project.featured_image}" alt="Tonic" />
                                <div class="content">
                                    <h2 class="project-title">${project.name}</h2>
                                    <div class="stats">
                                        <h3 class="client">${project.client}</h3>
                                        <div class="dot"></div>
                                        <h3 class="myrole">${project.role}</h3>
                                        <div class="dot"></div>
                                        <h3 class="year">${project.year}</h3>
                                    </div>
                                    <p class="description">${project.description}</p>
                                    <ul class="languages">
                                        ${project.technologies.map((tech) => `<li class="lang">${tech}</li>`)}
                                    </ul>
                                    <button class="details-btn" type="button">See Project</button>
                                </div>
                            </div>`;
    workSection.insertAdjacentHTML('beforeend', projectHTML);
  });
};

function toggleMenu() {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('header').classList.toggle('remove-padding');
}
function mobileMenuOption(event, id) {
  event.preventDefault();
  toggleMenu();
  const linkTo = document.getElementById(id);
  linkTo.scrollIntoView();
}
