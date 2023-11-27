let header=document.querySelector("header")
let button=document.querySelector("header nav ul li>button")
document.addEventListener('scroll',function(){

    let scrollPos=window.pageYOffset;
    if(scrollPos>100){header.style.backgroundColor="white";
    button.style.backgroundColor="#1a8917";
}
else{header.style.backgroundColor=" #ffc017";
button.style.backgroundColor="#191919";}});


console.log(window)