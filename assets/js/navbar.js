let myNav = document.getElementById('awcNav');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 25 || document.documentElement.scrollTop >= 25) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};