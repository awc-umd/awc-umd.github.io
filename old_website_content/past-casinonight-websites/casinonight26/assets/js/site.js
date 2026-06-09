
document.addEventListener('DOMContentLoaded', () => {
  // navbar entry animation 
  const nav = document.querySelector('.navbar.awc-navbar');
  if (nav) requestAnimationFrame(() => nav.classList.add('is-in'));

  // preferences -> reduce motion toggle 
  const reduceBox = document.getElementById('toggleReduceMotion');
  if (reduceBox) initReduceMotion(reduceBox);
});

/* modules */
function initReduceMotion(box){
  const KEY = 'pref-reduce-motion';
  const root = document.documentElement;

  function apply(on){
    if (on) root.setAttribute('data-reduce-motion','true');
    else    root.removeAttribute('data-reduce-motion');
    localStorage.setItem(KEY, on ? '1':'0');
  }

  const saved = localStorage.getItem(KEY) === '1';
  box.checked = saved;
  apply(saved);
  box.addEventListener('change', e => apply(e.target.checked));
}
