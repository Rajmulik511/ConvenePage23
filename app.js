let hamburger = document.querySelector(".hamburger");
let navList = document.querySelectorAll(".nav-list")
let navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click",()=>{
    navBar.classList.toggle("active"); 

});
navList.forEach(function(li){
    li.addEventListener("click",()=>{
        navBar.classList.remove("active"); 
    })
})



