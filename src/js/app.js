import sayHello from './lib/sayHello.js';

sayHello();
console.log('app.js');

$(function() {
  // Slider
  let sliderReview = $('#gallery').lightSlider({
    item: 3,
    slideMargin: 77,
    pager: false,
    speed: 500,
    pause: 1000,
    onBeforeStart: function(item) {
      // console.log('item', item);
      // console.log('getTotalSlideCount', item.getTotalSlideCount);
      // console.log('item.len', item.length);
    },
    onSliderLoad: function(el) {
      // console.log('onSliderLoad', el.getCurrentSlideCount());
      // const currIndex = el.getCurrentSlideCount();
      // if (currIndex === 1) {
      //   $('.slider__btn--prev').addClass('slider__btn--active-prev');
      // } else {
      //   console.log('else');
      //   $('.slider__btn--prev').removeClass('slider__btn--active-prev');
      // }
    },
    onAfterSlide: function(el) {
      // console.log('onAfterSlide', el);
      // console.log('onAfterSlide 2', el.getTotalSlideCount());
      // console.log('onAfterSlide 3', el.getCurrentSlideCount());
      // const currentSlide = el.getCurrentSlideCount();
      
      // if (currentSlide === 4) {
      //   console.log('1111');
      // }
    }, 
    responsive : [
      {
        breakpoint: 800,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1.5,
          slideMove: 1
        }
      }
    ],
  });

  $('#gallery-btn .slider__btn--prev').click(function(e) {
    sliderReview.goToPrevSlide();
  });

  $('#gallery-btn .slider__btn--next').click(function(e) {
    sliderReview.goToNextSlide();
  });

  let acc = document.getElementsByClassName('faq__accordion');
  let i;

  for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
      let panel = this.nextElementSibling;
      let coursePanel = document.getElementsByClassName('faq__accordion-body');
      let courseAccordionActive = document.getElementsByClassName('faq__accordion faq__accordion--active');

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove('faq__accordion--active');
      } else { 
        for (let ii = 0; ii < courseAccordionActive.length; ii++) {
          courseAccordionActive[ii].classList.remove('faq__accordion--active');
        }

        for (let iii = 0; iii < coursePanel.length; iii++) {
          this.classList.remove('faq__accordion--active');
          coursePanel[iii].style.maxHeight = null;
        }
        panel.style.maxHeight = panel.scrollHeight + 'px';
        this.classList.add('faq__accordion--active');
      } 
	  };
  }

  // input number mask
  $('#cc-number-input').mask('0000 0000 0000 0000');

  $('.stock-banner__btn').click(function(e) {
    e.preventDefault();

    const input = document.querySelector('.cc-number-input');
    const tegErrorForm = document.querySelector('.stock-banner__form');
    const mainWrapper = document.querySelector('.stock-banner__right');
    const appendHTML = document.querySelector('.stock-banner__wrap-empty');
    const tegInputWrapper = document.querySelector('.stock-banner__wrap-input');

    const textHTMLEmpty = '<p class="stock-banner__field-empty">Заповнить поле</p>';

    if (!input.value.length) {
      tegInputWrapper.classList.add('stock-banner__wrap-input--active');
      appendHTML.innerHTML = textHTMLEmpty;

    } else {
      $.ajax({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        data: {
          'number': input.value,
        },
        success: function(data) {
          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');
          tegErrorForm.classList.remove('stock-banner__form-error');

          if (data) {
            mainWrapper.classList.add('stock-banner__right-registration');
          }
        },
        error: function(er) {
          console.log('er: ', er);
          tegErrorForm.classList.add('stock-banner__form-error');
          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');
        }
      });
    }
  });

  $('.stock-banner__wrap-svg').click(function(e) {
    e.preventDefault();
    
    const passwordInput = document.querySelector('.cc-number-input');

    passwordInput.type === 'password' ?
      passwordInput.type = 'text'
      :
      passwordInput.type = 'password';
  });

  // JSON.parse()
  const cookieStorage = localStorage.getItem('cookie');
  console.log('cookieStorage!!!: ', cookieStorage);
  // console.log('1111')
  if (cookieStorage) {
    
  }

  // const getCookie = document.querySelector('.cookie');
  // mainWrapper.classList.add('cookie--active');

  // const productData = JSON.parse(localStorage.getItem('cookie'));
  // localStorage.setItem('product', JSON.stringify(data));

  $('.cookie__btn').click(function (e) {
    console.log('22222');
  });
});


