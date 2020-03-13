//  //Work section reveal
//  ScrollReveal().reveal('.reveal_me', {
//    delay: 300
//  });
//  //End of Work section reveal

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



AOS.init({
  duration: 1200,
})