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


// hero section

let herosection = document.querySelector(".hero-section")
let image = ["./src/hero-1", "./src/hero-2", "./src/hero-3"]
let index = 0;

setInterval(() => {
    index++
    if (index >= image.length) {
        index = 0
    }

    herosection.style.backgroundImage =`linear-gradient(90deg,rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0.521)),url(${image[index]})`;

},2000);


let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
let img3=document.querySelector(".img3")

img1.addEventListener("click",()=>{
        herosection.style.backgroundImage =`url("./src/hero-1")`;
        img1.style.backgroundColor="green"
        img2.style.backgroundColor="transparent"
        img3.style.backgroundColor="transparent"
})

img2.addEventListener("click",()=>{
        herosection.style.backgroundImage =`url("./src/hero-2")`;
        img2.style.backgroundColor="green"
        img3.style.backgroundColor="transparent"
        img1.style.backgroundColor="transparent"
})

img3.addEventListener("click",()=>{
        herosection.style.backgroundImage =`url("./src/hero-3")`;
        img3.style.backgroundColor="green"
        img1.style.backgroundColor="transparent"
        img2.style.backgroundColor="transparent"
})
