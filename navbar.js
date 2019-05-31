// window.onscroll = function () { myFunction() };

// var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;

window.onscroll = function myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        this.console.log(window.pageYOffset + " "+ sticky);
        navbar.classList.add("sticky")
    } else {
        this.console.log(window.pageYOffset + " "+ sticky);
        navbar.classList.remove("sticky");
    }
}
