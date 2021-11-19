const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  effect: 'slide', //flip

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
    type: 'bullets',
    clickable: true,
    // bulletClass: 'swiper-pagination-bullet'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      // spaceBetween: 40
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  effect: 'slide', //flip

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    type: 'bullets',
    clickable: true,
    // bulletClass: 'swiper-pagination-bullet'
  },
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  effect: 'slide', //flip

  // If we need pagination
  pagination: {
    el: '.swiper-pagination3',
    type: 'bullets',
    clickable: true,
    // bulletClass: 'swiper-pagination-bullet'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      pagination: false
    }
  }
});

const swiper4 = new Swiper('.swiper4', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'flip', //slide
  initialSlide: 1,
  autoHeight: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination4',
    type: 'bullets',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      effect: 'slide', //flip
      initialSlide: 0,
      loop: false,
    }
  }
});