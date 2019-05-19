/*slider*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (n >slides.length) {
		slideIndex = 1
	}
	if (n < 1){
		slideIndex=slides.length
	}
	for (i=0; i <slides.length ; i++){
		slides[i].style.display = "none";
		
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active", "");

	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active";
}


/*time*/
const secondHand = document.querySelector('.sec');
const minsHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');
const digitalTime = document.querySelector('.time');

function setDate() {
    const now = new Date();
    var seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    var mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    var hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    digitalTime.innerHTML = parseTime(hour) + ':' + parseTime(mins) + ':' + parseTime(seconds);
}
  
function parseTime(n) {
    if(n < 10) {
        n = '0' + n;
    }
    return n;
}
setInterval(setDate, 1000);
setDate(); 



/*login form*/
function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, 100);

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);

}

function ocultar_login_sign_up() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}

/*import DirectionReveal from 'direction-reveal';

// Init with default setup
const directionRevealDemo = DirectionReveal();

// Инициализация со всеми опциями
const directionRevealSwing = DirectionReveal({
  selector: '.direction-reveal',              // Селектор контейнера с элементами
  itemSelector: '.direction-reveal__card',    // Селектор одного элемента
  animationName: 'swing',                     // CSS класс анимации
  enableTouch: true,                          // Добавление тач событий, для отображения контента при первом клике и затем на втором клике для движения
  touchThreshold: 250                         // Touch length должен быть меньше указанного порога срабатывания, чтобы предотвратить срабатывание события при скроллинге
});
*/


