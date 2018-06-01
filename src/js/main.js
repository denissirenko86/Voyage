$('.offers-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.reviews').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Scroll 
const scrollBtn = $('[data-scroll]'); 

function onClick(e) {
    e.preventDefault(); 
    const target = $(this).attr('data-scroll');
    const dist = $(target).offset().top;
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing'); 
}

scrollBtn.on('click', onClick); 













































