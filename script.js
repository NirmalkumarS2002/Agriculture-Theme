/* ========================= */
/* LOADER HIDE */
/* ========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".website-loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2000);

});


// nav bar



let navcontent = document.querySelector('.nav-content');
let toggle = document.querySelector('.menu-toggle');
let close1 = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
    close1.style.display = "block";
    navcontent.style.visibility = "visible";
    navcontent.style.opacity = "1";
    toggle.style.display = "none";
});

close1.addEventListener("click", () => {
    close1.style.display = "none";
    navcontent.style.visibility = "hidden";
    navcontent.style.opacity = "0";
    toggle.style.display = "block";

});

window.addEventListener("resize", (() => {
    if (window.innerWidth > 1080) {
        navcontent.style.visibility = "visible";
        navcontent.style.opacity = "1";
        toggle.style.display = "none";
        close1.style.display = "none";
    }
    else {
        navcontent.style.visibility = "hidden";
        navcontent.style.opacity = "0";
        toggle.style.display = "block";
        close1.style.display = "none";

    }

}))

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

let navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("active");

    }

    else{

        navbar.classList.remove("active");

    }

});

let menuBtn = document.querySelector(".menu-toggle");

let closeBtn = document.querySelector(".close-btn");

let navContent = document.querySelector(".nav-content");

/* OPEN MENU */

menuBtn.addEventListener("click",()=>{

    navContent.classList.add("active");

});

/* CLOSE MENU */

closeBtn.addEventListener("click",()=>{

    navContent.classList.remove("active");

});
// =========================
// HERO IMAGE SLIDER
// =========================

let herosection = document.querySelector(".hero-section");

let buttons = document.querySelectorAll(".imgbtn button");

/* IMAGES */

let images = [

    "./src/hero-1.webp",

    "./src/hero-2.webp",

    "./src/hero-3.webp"

];

let index = 0;

/* =========================
   UPDATE SLIDER
========================= */

function updateSlider(){

    /* CHANGE BACKGROUND */

    herosection.style.backgroundImage =

    `linear-gradient(
    90deg,
    rgba(0,0,0,0.65),
    rgba(0,0,0,0.45)
    ),
    url(${images[index]})`;

    /* REMOVE ACTIVE */

    buttons.forEach((btn)=>{

        btn.classList.remove("active-btn");

    });

    /* ADD ACTIVE */

    buttons[index].classList.add("active-btn");
}

/* FIRST ACTIVE */

updateSlider();

/* =========================
   AUTO SLIDE
========================= */

setInterval(()=>{

    index++;

    if(index >= images.length){

        index = 0;
    }

    updateSlider();

},3000);

/* =========================
   BUTTON CLICK
========================= */

buttons.forEach((btn, i)=>{

    btn.addEventListener("click",()=>{

        index = i;

        updateSlider();

    });

});
//  footer section

/* =========================
   FOOTER SUBSCRIBE
========================= */

let subscribeBtn =
document.querySelector(".newsletter-box button");

let emailInput =
document.querySelector(".newsletter-box input");

/* BUTTON CLICK */

subscribeBtn.addEventListener("click",()=>{

    let emailValue =
    emailInput.value.trim();

    /* CHECK EMPTY */

    if(emailValue === ""){

        alert("Please enter your email");

    }

    /* EMAIL VALIDATION */

    else if(
        !emailValue.includes("@") ||
        !emailValue.includes(".")
    ){

        alert("Please enter a valid email");

    }

    /* SUCCESS */

    else{

        alert("Subscribed Successfully!");

        emailInput.value = "";
    }

}); 

// top

/* =========================
   SCROLL TO TOP
========================= */

let topBtn =
document.querySelector(".topbtn");

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// Scroll Fade-in Animation
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.style.animationPlayState = 'running';
  });
}, {threshold: 0.15});
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.animationPlayState = 'paused';
  fadeObserver.observe(el);
});

// Stats Counter Animation
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const el = e.target;
      const target = +el.dataset.target;
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString();
        if(current >= target) clearInterval(timer);
      }, 25);
      counterObs.unobserve(el);
    }
  });
}, {threshold: 0.5});
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));


/* ========================= */
/* 404 PAGE REDIRECT */
/* ========================= */

const errorBtn = document.querySelectorAll(".errorbutton");

errorBtn.forEach(button => {

    button.addEventListener("click", () => {

        window.location.href = "404.html";

    });

});

/* =========================================
   SCROLL SECTION ANIMATION
========================================= */

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},

{
    threshold:0.2
}

);

/* ALL ELEMENTS */

const hiddenElements = document.querySelectorAll(

".reveal, .reveal-left, .reveal-right, .zoom-in"

);

hiddenElements.forEach((el)=> observer.observe(el));