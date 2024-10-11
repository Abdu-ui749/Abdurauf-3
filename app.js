const active = document.querySelectorAll(images => {
    images.addEventListener('click', () => {
        removeActiveClasses()
        images.classList.add('active')
    })
})
function removeActiveClasses() {
    images.forEach(image => {
        image.classList.remove('active')
    })
}