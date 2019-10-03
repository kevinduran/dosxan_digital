ScrollReveal().reveal('.reveal_me', { delay: 500 });


//Navigation Overlay
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  //End of Navigarion Overlay