var fblogo = document.getElementById("fblogo");
var ghlogo = document.getElementById("ghlogo");
var inlogo = document.getElementById("inlogo")
var twlogo = document.getElementById("twlogo");
var aboutmetxt = document.getElementById("aboutmetxt");
var contacttxt = document.getElementById("contacttxt");
var myskillstxt = document.getElementById("myskillstxt");
var divimglogo = document.getElementById("imagedivbarre");
var spanlink = document.querySelector(".spanlink");
divimglogo.addEventListener("click", () => {
    window.location.href = "index.html"
})
myskillstxt.addEventListener("click",() => {
    window.location.href = "myskills.html"
});
contacttxt.addEventListener("click", () => {
    window.location.href = "contact.html"
})
aboutmetxt.addEventListener("click", () =>{
    window.location.href = "about.html"
});
fblogo.addEventListener("click", () => {
    window.open("https://web.facebook.com/people/Corbo-Web/100084360202066/") ; 
});
ghlogo.onclick = function() {
    window.open("https://github.com/Corbowebru");
}
inlogo.addEventListener("click",() => {
    window.open("https://www.linkedin.com/in/corbo-web-a27b88248/");
});
twlogo.addEventListener("click",() => {
    window.open("https://twitter.com/corboweb")
});
spanlink.addEventListener("click",() => {
    window.open("https://www.linkedin.com/in/corbo-web-a27b88248/");
})
