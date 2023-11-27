let header=document.querySelector("header")
let button=document.querySelector("header nav ul li>button")
document.addEventListener('scroll',function(){

    let scrollPos=window.pageYOffset;
    if(scrollPos>100){header.style.backgroundColor="white";
    button.style.backgroundColor="#1a8917";
header.style.transition="background-color 1s ease;"
button.style.transition="background-color 1s ease;"}
else{header.style.backgroundColor=" #ffc017";
button.style.backgroundColor="#191919";
header.style.transition="background-color 1s ease-out "
button.style.transition="background-color 1s ease-out "}});





const lettera = document.getElementById("m");
setInterval(function() {lettera.style.transition="opacity 10s ease "}, 10
);

console.log(window)