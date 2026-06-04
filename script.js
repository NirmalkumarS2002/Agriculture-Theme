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
    if (window.innerWidth > 1000) {
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


// hero section

let herosection = document.querySelector(".hero-section")
let image = ["./src/hero-1.webp", "./src/hero-2.webp", "./src/hero-3.webp"]
let index = 0;

setInterval(() => {
    index++
    if (index >= image.length) {
        index = 0
    }

    herosection.style.backgroundImage =`linear-gradient(90deg,rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0.521)),url(${image[index]})`;
    img1.style.backgroundColor="transparent"
        img2.style.backgroundColor="transparent"
        img3.style.backgroundColor="transparent"
},2000);


let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
let img3=document.querySelector(".img3")

img1.addEventListener("click",()=>{
        herosection.style.backgroundImage =`linear-gradient(90deg,rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0.521)),url("./src/hero-1.webp")`;
        img1.style.backgroundColor="green"
        img2.style.backgroundColor="transparent"
        img3.style.backgroundColor="transparent"
})

img2.addEventListener("click",()=>{
        herosection.style.backgroundImage =`linear-gradient(90deg,rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0.521)),url("./src/hero-2.webp")`;
        img2.style.backgroundColor="green"
        img3.style.backgroundColor="transparent"
        img1.style.backgroundColor="transparent"
})

img3.addEventListener("click",()=>{
        herosection.style.backgroundImage =`linear-gradient(90deg,rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0.521)),url("./src/hero-3.webp")`;
        img3.style.backgroundColor="green"
        img1.style.backgroundColor="transparent"
        img2.style.backgroundColor="transparent"
})

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