const scrlBtn = document.querySelector('.scroll-top');

console.log(scrlBtn);

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 250) {
        scrlBtn.style.display = "none";
    } else {
        scrlBtn.style.display = "block";
    }
}

refreshButtonVisibility();

scrlBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})

document.addEventListener('scroll', (e) => {
    refreshButtonVisibility();

})