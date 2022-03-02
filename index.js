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
    live_link: 'https://isaacpitwa.github.io/my-portfolio/',
    github_link: 'https://github.com/isaacpitwa/my-portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project2.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    live_link: 'https://isaacpitwa.github.io/my-portfolio/',
    github_link: 'https://github.com/isaacpitwa/my-portfolio',
  },
  {
    id: 3,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project3.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    live_link: 'https://isaacpitwa.github.io/my-portfolio/',
    github_link: 'https://github.com/isaacpitwa/my-portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'images/project4.svg',
    technologies: ['html', 'css', 'javaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    live_link: 'https://isaacpitwa.github.io/my-portfolio/',
    github_link: 'https://github.com/isaacpitwa/my-portfolio',
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
    live_link: 'https://isaacpitwa.github.io/my-portfolio/',
    github_link: 'https://github.com/isaacpitwa/my-portfolio',
  },
];

window.onload = (params) => {
  const workSection = document.getElementById('Portoflio');
  projects.forEach((project) => {
    const projectHTML = ` <div class="work-card"  id="${project.id}">
                                <img src="${project.featured_image}" alt="${project.name}" />
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
                                        ${project.technologies.map((tech) => `<li class="lang">${tech}</li>`).join('')}
                                    </ul>
                                    <button class="details-btn" type="button" onclick ="showProject(${project.id})">See Project</button>
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
function showProject(id) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const body = document.querySelector('body');
  const project = projects.find((project) => project.id === id);
  const popup = ` <section class="project-details">
  <div class="details-card">
      <div class="heading">
          <div>
              <h2 class="project-title">${project.name}</h2>
              <div class="stats">
                  <h3 class="client">${project.client}</h3>
                  <div class="dot"></div>
                  <h3 class="myrole">${project.role}</h3>
                  <div class="dot"></div>
                  <h3 class="year">${project.year}</h3>
              </div>
          </div>
          <img src="images/icons/close_gray.svg" alt="Close" onclick="closeProjectDetails()" />

      </div>
      <img src="${project.featured_image}" alt="${project.name}" class="project-image"  height="450"/>
      <div class="project-desc">
          <p>${project.description}</p>
          <div class="details-actions">
              <ul class="languages">
              ${project.technologies.map((tech) => `<li class="lang">${tech}</li>`).join('')}
              </ul>
              <ul class="languages languages-extra">
                  <li class="lang">github</li>
                  <li class="lang">ruby</li>
                  <li class="lang">Bootstrap</li>
              </ul>
              <hr/>
              <div class="project-btns">
                  <a href="${project.live_link}" target="_blank"><button type="button" >See live <span><img src="images/icons/external_link.svg" alt="See Live"><img src="images/icons/external_link_white.svg" alt="See Live"></span></button></a>
                  <a href="${project.github_link}" target="_blank"><button type="button" >See  Source <span><img src="images/icons/github_link.svg" alt="See Source"><img src="images/icons/github_link_white.svg" alt="See Source"></span></button></a>
              </div>
          </div>
      </div>
  </div>
</section>`;
  body.insertAdjacentHTML('beforebegin', popup);
}

function closeProjectDetails() {
  const openPopupCards = document.getElementsByClassName('project-details');
  for (let index = 0; index < openPopupCards.length; index += 1) {
    const element = openPopupCards[index];
    element.parentNode.removeChild(element);
  }
}
