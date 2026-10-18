// Small UX scripts: set year and smooth scroll
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});

const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card[data-category]');
const moreProjects = document.querySelector('.projects-more');

function showProjects(category) {
  projectCards.forEach(card => {
    const isVisible = category === 'all' || card.dataset.category === category;
    card.hidden = !isVisible;
  });

  projectFilters.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  });

  moreProjects.hidden = category !== 'all';
}

projectFilters.forEach(button => {
  button.addEventListener('click', () => {
    showProjects(button.dataset.filter);
  });
});

const activeProjectFilter = document.querySelector('.project-filter[aria-pressed="true"]');
showProjects(activeProjectFilter.dataset.filter);
