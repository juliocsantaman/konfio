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
  effect: 'slide', //slide
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
      initialSlide: 0,
      loop: false,
      // effect: 'slide',
      spaceBetween: 40,
      
    }
  }
});

const swiper5 = new Swiper('.swiper5', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination5',
    type: 'bullets',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 40
      
    }
  }
});

const swiperCreditRequirements = new Swiper('.swiper-credit-requirements', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 40
    }
  }
});