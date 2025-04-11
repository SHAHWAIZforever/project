document.getElementById('navbar-toggler').addEventListener('click', function () {
  var navbarCollapse = document.getElementById('navbarLinks');
  
  // Toggle the "show" class to open or close the navbar
  navbarCollapse.classList.toggle('show');
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  });
});
