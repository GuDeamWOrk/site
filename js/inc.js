const swiper = new Swiper('.swiper', {
    // Optional parameters
    centerInsufficientSlides: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

  });