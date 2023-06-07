let offset=0;
const sliderLine = document.querySelector('.second-right');

document.querySelector('.slider-next').addEventListener('click', function(){
offset = offset + 170;
if (offset>510){
    offset = 0;
}
sliderLine.style.left= -offset +'px';
});