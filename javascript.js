let burger_button = document.querySelector(".burger_button");
let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");

burger_button.addEventListener("click", ()=>{
    burger.classList.add("show");
    xmark.style.display = "block";
    burger_button.style.display = "none";
});

xmark.addEventListener("click", ()=>{
    burger.classList.remove("show");
    burger_button.style.display = "block";
    xmark.style.display = "none";
});