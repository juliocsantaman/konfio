const swiperBenefits = new Swiper('.swiper-benefits', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3
    }
  }
});

const swiperClientResults = new Swiper('.swiper-client-results', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});

const swiperUnstoppableEntrepreneurs = new Swiper('.swiper-unstoppable-entrepreneurs', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    // bulletClass: 'swiper-pagination-bullet'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      pagination: false,
      loop: false
    }
  }
});

const swiperBusinessCredit = new Swiper('.swiper-business-credit', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  initialSlide: 1,
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
      slidesPerView: 2,
      initialSlide: 0,
      loop: false,
    },
    // when window width is >= 992px
    992: {
      spaceBetween: 40,
      slidesPerView: 2,
      initialSlide: 0,
      loop: false
    }
  }
});

const swiperCreditTypes = new Swiper('.swiper-credit-types', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,

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

const swiperExclusiveBenefits = new Swiper('.swiper-exclusive-benefits', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,

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
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

const swiperNav = new Swiper('.swiper-nav', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  slidesPerView: 3,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 5
    }
  }
});

const swiperCardRequirements = new Swiper('.swiper-card-requirements', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const swiperAdditionalFunctionalities = new Swiper('.swiper-additional-functionalities', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 5
    }
  }
});