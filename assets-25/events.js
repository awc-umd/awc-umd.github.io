
document.addEventListener('DOMContentLoaded', () => {
    const folder = 'assets-25/images/posters/';
    const count = 4; // how many pages you exported
    const ul = document.getElementById('event-slides');
    for (let i = 1; i <= count; i++) {
        const li = document.createElement('li');
        li.className = 'splide__slide';
        li.innerHTML = `<img src="${folder}image${i}.jpeg" alt="Page ${i}" loading="lazy">`;
        ul.appendChild(li);
    }
    new Splide('#posters', { type: 'loop', perPage: 4, focus: 'center', gap: '1rem', padding: '1rem' }).mount();
});