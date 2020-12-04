//Sticky Nav color change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    var $navItem = $('.navigation_item');
    var $navItemTwo = $('.navigation_item_two');
    var $navItemThree = $('.navigation_item_three');


    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $navItem.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $navItemTwo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $navItemThree.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
//End of Sticky Nav color change

//Navigation Overlay
$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
  $('.site_logo_a').toggleClass('open');
});
//End of Navigarion Overlay


//Initiate AOS
AOS.init({
  duration: 1000,
});
// End of Initiate AOS


// Header word loop
var text = ["create", "develop", "build", "shape"];
var counter = 0;
var elem = document.getElementById("changeText");
var header_word = document.querySelector('.intro--header-word-fill')

var init = setInterval(change, 2000);
var initTwo = setInterval(colorDown, 1000);
var initThree = setInterval(colorUp, 2000);
function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
function colorDown() {
 header_word.style.height="100%"
}
function colorUp() {
  header_word.style.height="0"
 }
//End of Header word loop


//Form Validation

let submit_button = document.querySelector('.btn-submit');
let number_one = document.getElementById('help');
let number_two = document.getElementById('company_name');
let number_three = document.getElementById('company_url');
let number_four = document.getElementById('name');
let number_five = document.getElementById('email');
let number_six = document.getElementById('share');

let warning_triangle = document.getElementById('warning-triangle');
let warning_triangle_a = document.getElementById('warning-triangle--a');
let warning_triangle_b = document.getElementById('warning-triangle--b');
let warning_triangle_c = document.getElementById('warning-triangle--c');
let warning_triangle_d = document.getElementById('warning-triangle--d');
let warning_triangle_e = document.getElementById('warning-triangle--e');

let error_text = document.querySelector('.error-text');
let error_text_a = document.querySelector('.error-text--a');
let error_text_b = document.querySelector('.error-text--b');
let error_text_c = document.querySelector('.error-text--c');
let error_text_d = document.querySelector('.error-text--d');
let error_text_e = document.querySelector('.error-text--e');


submit_button.addEventListener('click', submitForm);

function submitForm(e) {
  e.preventDefault();


  number_one.classList.remove('error-border');
  warning_triangle.classList.remove('warning-triangle-visible');
  error_text.classList.remove('error-text-visible');

  number_two.classList.remove('error-border');
  warning_triangle_a.classList.remove('warning-triangle-visible');
  error_text_a.classList.remove('error-text-visible');

  number_three.classList.remove('error-border');
  warning_triangle_b.classList.remove('warning-triangle-visible');
  error_text_b.classList.remove('error-text-visible');

  number_four.classList.remove('error-border');
  warning_triangle_c.classList.remove('warning-triangle-visible');
  error_text_c.classList.remove('error-text-visible');

  number_five.classList.remove('error-border');
  warning_triangle_d.classList.remove('warning-triangle-visible');
  error_text_d.classList.remove('error-text-visible');
  
  number_six.classList.remove('error-border');
  warning_triangle_e.classList.remove('warning-triangle-visible');
  error_text_e.classList.remove('error-text-visible');



  if (number_one.value === '') {
    number_one.classList.add('error-border');
    warning_triangle.classList.add('warning-triangle-visible');
    error_text.classList.add('error-text-visible')
  }
  if (number_two.value === '') {
    number_two.classList.add('error-border');
    warning_triangle_a.classList.add('warning-triangle-visible');
    error_text_a.classList.add('error-text-visible')
  }
  if (number_three.value === '') {
    number_three.classList.add('error-border');
    warning_triangle_b.classList.add('warning-triangle-visible');
    error_text_b.classList.add('error-text-visible')
  }
  if (number_four.value === '') {
    number_four.classList.add('error-border');
    warning_triangle_c.classList.add('warning-triangle-visible');
    error_text_c.classList.add('error-text-visible')
  }
  if (number_five.value === '') {
    number_five.classList.add('error-border');
    warning_triangle_d.classList.add('warning-triangle-visible');
    error_text_d.classList.add('error-text-visible')
  }
  if (number_six.value === '') {
    number_six.classList.add('error-border');
    warning_triangle_e.classList.add('warning-triangle-visible');
    error_text_e.classList.add('error-text-visible')
  }

}
// End of Form Validation

