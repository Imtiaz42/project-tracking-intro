alert("this site is incomplete");
const toOpenButton = document.getElementById("to-open-menu");
const ul = document.querySelector("ul");
const menuCloseIcon = document.getElementById("menu-close-icon")

toOpenButton.addEventListener("click", () =>{
    ul.classList.add("opened");

    toOpenButton.style.display = "none";
    menuCloseIcon.style.display ="block"

    menuCloseIcon.addEventListener("click", () =>{
        toOpenButton.style.display = "block";
    menuCloseIcon.style.display ="none"
    ul.classList.remove("opened");
    })
}) 