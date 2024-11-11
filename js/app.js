const station1 = document.getElementById('station1');
const station2 = document.getElementById('station2');
const station3 = document.getElementById('station3');
const station4 = document.getElementById('station4');
const station5 = document.getElementById('station5');
const station6 = document.getElementById('station6');
const station7  = document.getElementById('station7');
const station8 = document.getElementById('station8');
const station9 = document.getElementById('station9');


function removeToggle() {
    station1.classList.remove('active');
    station2.classList.remove('active');
    station3.classList.remove('active');
    station4.classList.remove('active');
    station5.classList.remove('active');
    station6.classList.remove('active');
    station7.classList.remove('active');
    station8.classList.remove('active');
    station9.classList.remove('active');
}


station1.addEventListener('click', () => {
    removeToggle();
    station1.classList.toggle('active');
})

station2.addEventListener('click', () => {
    removeToggle();
    station2.classList.toggle('active');
})

station3.addEventListener('click', () => {
    removeToggle();
    station3.classList.toggle('active');
})

station4.addEventListener('click', () => {
    removeToggle();
    station4.classList.toggle('active');
})

station5.addEventListener('click', () => {
    removeToggle();
    station5.classList.toggle('active');
})

station6.addEventListener('click', () => {
    removeToggle();
    station6.classList.toggle('active');
})

station7.addEventListener('click', () => {
    removeToggle();
    station7.classList.toggle('active');
})

station8.addEventListener('click', () => {
    removeToggle();
    station8.classList.toggle('active');
})

station9.addEventListener('click', () => {
    removeToggle();
    station9.classList.toggle('active');
})