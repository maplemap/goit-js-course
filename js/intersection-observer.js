/* 
  - Intersection Observer
*/

const images = document.querySelectorAll('.lazyload');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
      entry.target.closest('.image-wrapper').classList.add('shown');
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add('loaded');
      observer.unobserve(entry.target);
    } else {
      entry.target.closest('.image-wrapper').classList.remove('shown');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

images.forEach((image) => observer.observe(image));
