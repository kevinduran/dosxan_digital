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
  duration: 1200,
});
// End of Initiate AOS


// Header word loop
var text = ["create", "develop", "build", "shape"];
var counter = 0;
var elem = document.getElementById("changeText");
var init = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
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
let skeleton_key = document.getElementsByClassName('contact_input');
submit_button.addEventListener('click', submitForm);

function submitForm(e) {
  e.preventDefault();
  skeleton_key.classList.remove('error-message')
  if (skeleton_key.value === '' || null) {
  skeleton_key.classList.add('error-message');
}
}
// End of Form Validation