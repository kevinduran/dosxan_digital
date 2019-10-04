ScrollReveal().reveal('.reveal_me', {
    delay: 500
});


//Navigation Overlay
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.site_logo').toggleClass('open');
});
//End of Navigarion Overlay