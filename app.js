const activeImage = document.getElementById(img);
image.src = "./MainAfter.jpg";
document.body.appendChild(img);
  document.image.forEach( image => {
   image.addeventListener('click', () => {
       removeActiveClasses(image);
       image.add('active');
   })
});
function removeActiveClasses() {
     image.forEach(image => {
      image.remove('active')
   })
}