let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",()=>{
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
});