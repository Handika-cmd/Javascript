const light = document.getElementById("light");
const dark = document.getElementById("dark");

dark.addEventListener("click", function(){
    document.body.classList.add("dark-mode");

    localStorage.setItem("tema", "dark");
});

light.addEventListener("click", function(){
    document.body.classList.remove("dark-mode");

    localStorage.setItem("tema", "light");
});

const temaTersimpan = localStorage.getItem("tema");

if (temaTersimpan === "dark"){
    document.body.classList.add("dark-mode");
}