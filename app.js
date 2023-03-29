let menuIcon = document.querySelector("#menu-icon");
let show = document.querySelector(".show");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle('bx-x');
    show.classList.toggle('active');
});