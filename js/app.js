const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-btn-icon");
const menu = document.getElementById("menu");
const form = document.getElementById("myform");
const email = document.getElementById("email-input");

let isOpen = false;

menuBtn.addEventListener("click",()=>{
    isOpen = !isOpen;
    menuIcon.src = isOpen ? "./img/icon-close.svg" : "./img/icon-hamburger.svg";
    menu.classList.toggle("hidden");
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert(email.value+" Added Successfully To The Newsletter.")
});
