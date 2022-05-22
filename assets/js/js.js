var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}
repeat();



//div سلامت left:
const divLeft = document.querySelector('#divleftsidbar');
const textImge = document.querySelector('#textimge');

divLeft.addEventListener('mouseover' , ()=>{
    textImge.classList.add('textImgeHower');
})


// slider coching:
var slid = document.getElementsByClassName('slid');
var dot = document.getElementsByClassName('dot');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

var n = 0;
var i;




function disno(){
    for(i = 0 ; i < slid.length ; i++){
        slid[i].style.display = 'none';
    } 
}
function no_active(){
    for( i = 0 ; i< dot.length ; i++){
        dot[i].classList.remove('active');
    }
}

next.addEventListener('click' , function(e){
    e.preventDefault();
    n++;
    if(n>slid.length -1){
        n = 0;
    }
    disno();
    no_active();
    slid[n].style.display = 'block'
    dot[n].classList.add('active')
})

prev.addEventListener('click' , function(e){
    e.preventDefault();
    n++;
    if(n>slid.length -1){
        n = 0;
    }
    disno();
    no_active();
    slid[n].style.display = 'block'
    dot[n].classList.add('active')
})


setInterval(function(){
   
    n++;
    if(n>slid.length -1){
        n = 0;
    }
    disno();
    no_active();
    slid[n].style.display = 'block'
    dot[n].classList.add('active')
},5000)



 