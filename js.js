

var photo=document.querySelector('.photo');
console.log(photo);
function lightboxEffect(){
    showImage(photo);
    openLightbox();
}
photo.addEventListener('click',lightboxEffect)