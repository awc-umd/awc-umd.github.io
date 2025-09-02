
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

document.addEventListener('DOMContentLoaded', () => {
    const folder = 'assets-25/images/gallery-sponsor/';
    const count = 8; // how many pages you exported
    const ul = document.getElementById('pdf-slides');
    for (let i = 1; i <= count; i++) {
        const li = document.createElement('li');
        li.className = 'splide__slide';
        li.innerHTML = `<img src="${folder}${i}.png" alt="Page ${i}" loading="lazy">`;
        ul.appendChild(li);
    }
    new Splide('#gallery-pdf', { type: 'loop', perPage: 2, focus: 'center', gap: '1rem', padding: '1rem' }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');

    function enableModal(selector) {
        const root = document.querySelector(selector);
        if (!root) return;
        root.addEventListener('click', (e) => {
            const img = e.target.closest('.splide__slide img');
            if (!img) return;
            modalImg.src = img.dataset.full || img.src;
            modalImg.alt = img.alt || '';
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    }
    enableModal('#gallery-2025');
    enableModal('#gallery-pdf');
});