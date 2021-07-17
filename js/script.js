// jshint esversion:10

const body = document.querySelector("body");
const intro = document.querySelector(".intro");
const gallery = document.querySelector(".gallery");
const theme = document.querySelector(".theme");
const fig = document.querySelectorAll(".fig__img");

theme.addEventListener("click", function(event) {
    body.classList.toggle("dark-theme");
});

let navBtn = document.querySelector(".nav__btn");
let links = document.querySelector(".nav__links");
let bar = document.querySelector(".bar");

navBtn.addEventListener("click", event => {
    if (Number(document.documentElement.clientWidth) <= 900) {
        links.classList.toggle("nav-hidden");
        bar.classList.toggle("bar-anim");
    } else {
        links.classList.remove("nav-hidden");
        bar.classList.remove("bar-anim");
    }
});

let callBack = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
};

let options = {
    root: null,
    threshold: 0.2
};
let observer = new IntersectionObserver(callBack, options);
observer.observe(intro);
observer.observe(gallery);


let galcallBack = function(entries, observer) {
    entries.forEach(function(entry) {
        console.log(entry);
        if (entry.isIntersecting) {
            fig.forEach(fig => {
                fig.src = fig.dataset.src;
            });
            galobserver.unobserve(entry.target);
        }
    });
};

let galoptions = {
    root: null,
    threshold: 0.2
};
let galobserver = new IntersectionObserver(galcallBack, galoptions);
galobserver.observe(gallery);


window.addEventListener("load", function(event) {
    body.animate([{
            transform: "translateY(15rem)",
            opacity: 0
        },
        {
            transform: "translateY(0)",
            opacity: 1
        }
    ], {
        duration: 500,
        delay: 50,
        fill: "forwards",
        easing: "ease"
    });
});

window.addEventListener("beforeunload", function(event) {
    body.animate([{
            transform: "translateY(0)",
            opacity: 1
        },
        {
            transform: "translateY(15rem)",
            opacity: 0
        }
    ], {
        duration: 500,
        delay: 50,
        fill: "forwards",
        easing: "ease"
    });
});
