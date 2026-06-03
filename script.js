let navcontent=document.querySelector('.nav-content');
let toggle=document.querySelector('.menu-toggle');
let close1=document.querySelector(".close-btn");

toggle.addEventListener("click",()=>{
    close1.style.display="block";
    navcontent.style.visibility="visible";
    navcontent.style.opacity="1";
    toggle.style.display="none";
});

close1.addEventListener("click",()=>{
 close1.style.display="none";
    navcontent.style.visibility="hidden";
    navcontent.style.opacity="0";
    toggle.style.display="block";

});

window.addEventListener("resize",(()=>{
    if(window.innerWidth>1000){
        navcontent.style.visibility="visible";
        navcontent.style.opacity="1";
        toggle.style.display="none";
         close1.style.display="none";
    }
        else{
        navcontent.style.visibility="hidden";
        navcontent.style.opacity="0";
        toggle.style.display="block";
         close1.style.display="none";

        }

}))