let header=document.querySelector("nav")
let button=document.querySelector(" nav li>button")
document.addEventListener('scroll',function(){

    let scrollPos=window.scrollY;
    if(scrollPos>100){header.style.backgroundColor="white";
    button.style.backgroundColor="#1a8917";
header.style.transition="background-color 1s ease;"
button.style.transition="background-color 1s ease;"}
else{header.style.backgroundColor=" #ffc017";
button.style.backgroundColor="#191919";
header.style.transition="background-color 1s ease-out "
button.style.transition="background-color 1s ease-out "}});


function mRandom() {
    let m = document.querySelectorAll('g[opacity]');

    m.forEach(element => {
        let randomOpacity =  Math.round(Math.random());
        element.setAttribute('opacity', randomOpacity);
        element.classList.add('randoM');
    });
}

mRandom();
setInterval(mRandom, 800);






//const lettera = document.querySelectorAll("svg");
//setInterval(function() (svg.forEach(ele)=> {ele.style.opacity=0}), 1000
//);

//console.log(window)
//console.log(m)