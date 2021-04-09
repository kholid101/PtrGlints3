function Darkmode() {
    var element = document.body;
    element.classList.toggle("Dark-mode");

    var liElement = document.getElementById("dark-web").className === "web";
    console.log(liElement, "span");

    if(liElement) {
        document.getElementById("dark-web").className === "website-dark";
    }else if(!liElement) {
        document.getElementById("dark-web").className === "web";
    }

    var lightHead = document.getElementById("nav").className === "navbar";
    // console.log("lightHead");

    if (lightHead) {
        document.getElementById("nav").className = "navbar-Dark-mode";
    }else if(!lightHead) {
        document.getElementById("nav").className = "navbar";
    }

}