//MENU BURGER

// Fonction pour gérer le clic sur l'icône du menu
// function toggleMenu() {
//     const menuContent = document.getElementById("menuContent");
//     menuContent.classList.toggle("is-active");
//   }
  
  // Ajout d'un écouteur d'événement sur l'icône du menu
//   const menuIcon = document.getElementById("menuIcon");
//   menuIcon.addEventListener("click", toggleMenu);
  

// const btn = document.getElementById('btnNav');
// const menu =document.getElementById('menuContent');

// btn.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
// })


const burger = document.querySelector('.burger-nav');
const menu = document.querySelector('.wrapper');


burger.addEventListener('click', function(){
    menu.classList.toggle('is-active');
});

// const menuR = document.querySelector('brand1');

// burger.addEventListener('click', function(){
//     menuR.classList.toggle('is-active');
// } )

//ANIMATED TITLE

const spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(spContainer => {
    const letters = spContainer.children[0].textContent.split('');
    console.log(letters);
    spContainer.innerHTML = "";

    letters.forEach((el, index) => {
        spContainer.innerHTML += `<span style = "transition-delay:${ 0.07 *index}s" >${el}</span>`;
    })
})

    //COMPTEUR TIMER

var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countdownTimer() {
    const countDownDate = new Date ('09/25/2023 19:51').getTime()
//Convert to milliseconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day= hour * 24

//Calculate every second
const interval = setInterval (() => {
    //Get current date
    const now = new Date().getTime()
    const distance = countDownDate - now

    daysEl.innerText = formatNumber(Math.floor(distance / day))
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute))
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))
//When date is reached
if (distance < 0) {
    document.getElementById('headline').innerText = "READY TO CODE NOW";
    document.getElementById('countdown').style.display = 'none';
//Stop interval
    clearInterval(interval)
}
}, 1000)

}


//Add 0 if number is small then 10 ....8 ---> 08

function formatNumber(number) {
    if (number < 10) {
        return '0' + number;
    }
    
        return number;
    
}
//RUN FUNCTION

countdownTimer();