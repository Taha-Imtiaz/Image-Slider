var slide=document.querySelector('.slide');
var images=document.querySelectorAll(".slide img");
var left=document.querySelector('.left');
var right=document.querySelector(".right")

var counter=1;
var distance = images[0].clientWidth;
console.log(distance)
slide.style.transform=`translateX(-${distance*counter}px)`;

right.addEventListener("click",()=>{
    if(counter>=images.length-1) return;
    counter++;
    slide.style.transition="all 300ms ease";
    slide.style.transform=`translateX(-${distance*counter}px)`;
})

left.addEventListener("click",()=>{
    if(counter<=0) return;
    counter--;
    slide.style.transition="all 300ms ease";
    slide.style.transform=`translateX(-${distance*counter}px)`;
})

slide.addEventListener("transitionend",()=>{
    if(images[counter].id==="leftDeadEnd")
    {
        counter=5;
        slide.style.transition="none";
        slide.style.transform=`translateX(-${distance*counter}px)`;

    }
    if(images[counter].id==="rightDeadEnd")
    {
        counter=1;
        slide.style.transition="none";
        slide.style.transform=`translateX(-${distance*counter}px)`;

    }
    
    console.log(images[counter].id);
})
