let buttontDark = document.querySelector("#dark");

buttontDark.addEventListener("click", switchDarkMode);

function switchDarkMode(){
    document.documentElement.classList.toggle("dark");

}