const image = document.createElement('img');
image.src = "./MainAfter.jpg";
document.body.appendChild(image)
  document.image.forEach( image => {
   image.addeventListener('click', () => {
       removeActiveClasses();
       image.add('active');
   })
});
function removeActiveClasses() {
     image.forEach(image => {
      image.remove('active')
   })
}