//NavBar

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('navBtn');
x.onclick = toggleMenu;

//Portfolio img

document.querySelectorAll('.container-imagini img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-imag').style.display = 'block';
        document.querySelector('.popup-imag img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-imag span').onclick = () => {
    document.querySelector('.popup-imag').style.display = 'none';
}