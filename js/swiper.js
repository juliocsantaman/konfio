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
      slidesPerView: 3,
      spaceBetween: 30
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
      loop: false,
      spaceBetween: 30
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

const swiperPromotions = new Swiper('.swiper-promotions', {
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
      slidesPerView: 3,
      loop: false,
      spaceBetween: 10
    }
  }
});

const swiperBusinessCardTool = new Swiper('.swiper-business-card-tool', {
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
      slidesPerView: 3,
      loop: false,
      spaceBetween: 25
    }
  }
});

const swiperAutomateRevenueAndTime = new Swiper('.swiper-automate-revenue-and-time', {
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
      slidesPerView: 4,
      loop: false,
      // spaceBetween: 25
    }
  }
});

const swiperOrganizeYourAccounts = new Swiper('.swiper-organize-your-accounts', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  initialSlide: 1,
  autoHeight: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      spaceBetween: 40,
      slidesPerView: 2,
      initialSlide: 0
    }
  }
});

const swiperKonfioMrPayments = new Swiper('.swiper-konfio-mr-payments', {
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
      slidesPerView: 3,
      loop: false,
      // spaceBetween: 25
    }
  }
});

const swiperErpBenefits = new Swiper('.swiper-erp-benefits', {
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
    clickable: true
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      initialSlide: 0,
      loop: false
    },

    // when window width is >= 992px
    992: {
      spaceBetween: 60,
      slidesPerView: 2,
      initialSlide: 0,
      loop: false
    }
  }
});

const swiperPlans = new Swiper('.swiper-plans', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
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
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});

const swiperDeleteLimits = new Swiper('.swiper-delete-limits', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 40,

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
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});

const swiperBillerBenefits = new Swiper('.swiper-biller-benefits', {
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
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 15
    }
  }
});

const swiperPlans2 = new Swiper('.swiper-plans2', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  autoHeight: true,
  slidesPerView: 1,
  initialSlide: 1,
  loop: true,

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
      spaceBetween: 50
    }
  }
});

const swiperSolutions = new Swiper('.swiper-solutions', {
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
      slidesPerView: 3,
      loop: false,
      spaceBetween: 25
    }
  }
});

const swiperOurVideoChannel = new Swiper('.swiper-our-video-channel', {
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
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      loop: false,
      // spaceBetween: 25
    }
  }
});

const swiperPodcast = new Swiper('.swiper-podcast', {
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
      slidesPerView: 4,
      loop: false,
      spaceBetween: 15
    }
  }
});

const swiperGetBenefits = new Swiper('.swiper-get-benefits', {
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
      slidesPerView: 3,
      loop: false,
      // spaceBetween: 15
    }
  }
});

const swiperOurSearchEngine = new Swiper('.swiper-our-search-engine', {
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
      slidesPerView: 3,
      loop: false,
      spaceBetween: 42
    }
  }
});

const swiperSuccessStories = new Swiper('.swiper-success-stories', {
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
      slidesPerView: 3,
      loop: false,
      spaceBetween: 25
    }
  }
});

const swiperPlansFlipCards = new Swiper('.swiper-plans-flip-cards', {
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
      spaceBetween: 40,
      slidesPerView: 2,
      loop: false
    }
  }
});

const swiperWeworkBenefits = new Swiper('.swiper-wework-benefits', {
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
      spaceBetween: 30,
      slidesPerView: 2,
      loop: false
    }
  }
});

const swiperAddAdvantages = new Swiper('.swiper-add-advantages', {
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
      slidesPerView: 4,
      loop: false
    }
  }
});