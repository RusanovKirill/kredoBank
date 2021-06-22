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
    onAfterSlide: function(el) {
      disableSliderBtn(el);
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

  function disableSliderBtn(slider) {
    $('#gallery-btn .slider__btn--prev, #gallery-btn .slider__btn--next').removeClass('slider__btn--disabled');
    if( slider.getCurrentSlideCount() < 2) {
      $('#gallery-btn .slider__btn--prev').addClass('slider__btn--disabled');
    }
    if(slider.getCurrentSlideCount() > slider.getTotalSlideCount()-3) {
      $('#gallery-btn .slider__btn--next').addClass('slider__btn--disabled');
    }
  }

  sliderReview.length > 0 && disableSliderBtn(sliderReview);

  $('#gallery-btn .slider__btn--prev').click(function(e) {
    sliderReview.goToPrevSlide();
  });

  $('#gallery-btn .slider__btn--next').click(function(e) {
    sliderReview.goToNextSlide();
  });

  // accordion
  $('.faq__accordion').click(function() {
    var isToggle = !$(this).hasClass('faq__accordion--active');

    $('.faq__accordion').removeClass('faq__accordion--active');
    $('.faq__accordion .faq__accordion-body').slideUp(300);

    if(isToggle) {
      $(this).addClass('faq__accordion--active');
      $(this).find('.faq__accordion-body').slideDown(300);
    }
  });


  $('.stock-banner__btn').click(function(e) {
    e.preventDefault();

    const isCheckedInput = document.getElementById('c1');
    const input = document.querySelector('.cc-number-input');
    const tegErrorForm = document.querySelector('.stock-banner__form');
    const mainWrapper = document.querySelector('.stock-banner__right');
    const appendHTML = document.querySelector('.stock-banner__wrap-empty');
    const tegInputWrapper = document.querySelector('.stock-banner__wrap-input');

    const textHTMLEmpty = '<p class="stock-banner__field-empty">Заповнить поле</p>';

    if (!input.value.length || !isCheckedInput.checked) {
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
          tegErrorForm.classList.add('stock-banner__form-error');
          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');
        }
      });
    }
  });

  function formUserExists() {
    let wrapperHTML = document.querySelector('.stock-banner__right');

    wrapperHTML.classList.add('stock-banner__right-user');

    wrapperHTML.classList.remove('stock-banner__right-registration');
    wrapperHTML.classList.remove('stock-banner__right-finish');
  };

  function formFinish() {
    let wrapperHTML = document.querySelector('.stock-banner__right');

    wrapperHTML.classList.add('stock-banner__right-finish');

    wrapperHTML.classList.remove('stock-banner__right-user');
    wrapperHTML.classList.remove('stock-banner__right-registration');
  };

  // Input number mask
  $('#cc-number-input').mask('AAAA AAAA AAAA AAAA');

  let valInput;
  let toggleEye;

  $('.stock-banner__wrap-svg').click(function(e) {
    e.preventDefault();

    let pass = '';
    let symbol = '*';

    const passwordInput = document.querySelector('.cc-number-input');
    const val = passwordInput.value;

    for (let i = 0; i < val.length; i++) {
      pass += symbol;
    }
    $('#cc-number-input').val(pass);
  });
  
  // Popup cookie
  var checkCookie = localStorage.getItem('cookie');
  if (!checkCookie) {
    $('#cookie').removeClass('hide');
  }

  $('#cookie .cookie__btn').click(function() {
    localStorage.setItem('cookie', true);
    $('#cookie').addClass('hide');
  });

  // Timer
  var countDownDate = new Date('Jan 5, 2022 15:37:25').getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var timerHTML = `<div class="timer__block">
        <time class="timer__count">${days}</time>
        <p class="timer__string">днiв</p>
      </div>
      <div class="timer__block">
        <time class="timer__count">${hours}</time>
        <p class="timer__string">годин</p>
      </div>
      <div class="timer__block">
        <time class="timer__count">${minutes}</time>
         <p class="timer__string">хвилин</p>
      </div>`;
    
    var timerExpired = `<div class="timer__block">
        <time class="timer__count">0</time>
        <p class="timer__string">днiв</p>
      </div>
      <div class="timer__block">
        <time class="timer__count">0</time>
        <p class="timer__string">годин</p>
      </div>
      <div class="timer__block">
        <time class="timer__count">0</time>
         <p class="timer__string">хвилин</p>
      </div>`;

    $('#timer').html(timerHTML);

    if (distance < 0) {
      clearInterval(x);
      $('#timer').html(timerExpired);
    }
  }, 1000);

  if ($('.header-mobile__btn')) {
    var prevScrolled = 0;
    $(window).scroll(function() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var direction = winScroll - prevScrolled;
      if (direction > 0) {
        $('.header-mobile__btn').addClass('scroll');
      } else {
        $('.header-mobile__btn').removeClass('scroll');
      }
      prevScrolled = winScroll;
    });
  };
});
