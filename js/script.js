var typed = new Typed('#element', {
        strings: ['Web Developer','Web Designer'],
        typeSpeed: 50,
});
var typed2 =  new Typed('.text-gray', {
        strings: ['know about me'],
        typeSpeed: 50,
});
const visibility=document.getElementById("visible");
const bdy=document.querySelector("body");
const menu=document.querySelector("nav");
const ftr=document.querySelector("footer");
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


visibility.addEventListener("click",function(){
        if(visibility.value==="Light"){
                bdy.style.background="white";
                bdy.style.color="black";
                menu.style.color="white";
                ftr.style.color="white";
                ftr.style.backgroundColor="orange";
                visibility.value="Dark";
        }
        else{
                bdy.style.background="black";
                bdy.style.color="white";
                visibility.value="Light";
                ftr.style.backgroundColor="black";
        }

});