const defaults = document.querySelector('.default');
const blur = document.querySelector('.blur');
const grayscale = document.querySelector('.grayscale');
const brightness= document.querySelector('.brightness');
const contrast = document.querySelector('.contrast');
const saturation = document.querySelector('.saturation');
const opacity = document.querySelector('.opacity');
const rotate = document.querySelector('.rotate');
const shadow = document.querySelector('.shadow');
const invert = document.querySelector('.invert');

const myimage = document.querySelector('.image img');

defaults.addEventListener("click", ()=>{
    myimage.style.filter='none';
    //  alert('Default view!');
});

blur.addEventListener("click", ()=>{
    myimage.style.filter="blur(10px)";
    // alert('Blur view!');
});
grayscale.addEventListener("click", ()=>{
    myimage.style.filter="grayscale(100%)";
    // alert('Gray view!');
});
brightness.addEventListener("click", ()=>{
    myimage.style.filter="brightness(150%)";
    // alert('Bright view!');
});
contrast.addEventListener("click", ()=>{
    myimage.style.filter="contrast(150%)";
    // alert('Contrast view!');
});
saturation.addEventListener("click", ()=>{
    myimage.style.filter="saturate(200%)";
    // alert('Saturated view!');
});
opacity.addEventListener("click", ()=>{
    myimage.style.filter="opacity(50%)";
    // alert('Opacity view!');
});
rotate.addEventListener("click", ()=>{
    myimage.style.filter="hue-rotate(90deg)";
    // alert('Opacity view!');
});
shadow.addEventListener("click", ()=>{
    myimage.style.filter="drop-shadow(4px 4px 10px red);";
    // alert('Drop-shadow view!');
});
invert.addEventListener("click", ()=>{
    myimage.style.filter="invert(100%)";
    // alert('Inverted view!');
});
