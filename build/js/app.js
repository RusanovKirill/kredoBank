/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sayHello.js */ \"./lib/sayHello.js\");\n/* harmony import */ var _lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0__);\n\n_lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0___default()();\nconsole.log('app.js');\n$(function () {\n  // Slider\n  let sliderReview = $('#gallery').lightSlider({\n    item: 3,\n    slideMargin: 77,\n    pager: false,\n    speed: 500,\n    pause: 1000,\n    onAfterSlide: function (el) {\n      disableSliderBtn(el);\n    },\n    responsive: [{\n      breakpoint: 800,\n      settings: {\n        item: 2,\n        slideMove: 1,\n        slideMargin: 6\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        item: 1.5,\n        slideMove: 1\n      }\n    }]\n  });\n\n  function disableSliderBtn(slider) {\n    $('#gallery-btn .slider__btn--prev, #gallery-btn .slider__btn--next').removeClass('slider__btn--disabled');\n\n    if (slider.getCurrentSlideCount() < 2) {\n      $('#gallery-btn .slider__btn--prev').addClass('slider__btn--disabled');\n    }\n\n    if (slider.getCurrentSlideCount() > slider.getTotalSlideCount() - 3) {\n      $('#gallery-btn .slider__btn--next').addClass('slider__btn--disabled');\n    }\n  }\n\n  sliderReview.length > 0 && disableSliderBtn(sliderReview);\n  $('#gallery-btn .slider__btn--prev').click(function (e) {\n    sliderReview.goToPrevSlide();\n  });\n  $('#gallery-btn .slider__btn--next').click(function (e) {\n    sliderReview.goToNextSlide();\n  }); // accordion\n\n  $('.faq__accordion').click(function () {\n    var isToggle = !$(this).hasClass('faq__accordion--active');\n    $('.faq__accordion').removeClass('faq__accordion--active');\n    $('.faq__accordion .faq__accordion-body').slideUp(300);\n\n    if (isToggle) {\n      $(this).addClass('faq__accordion--active');\n      $(this).find('.faq__accordion-body').slideDown(300);\n    }\n  });\n  $('.stock-banner__btn').click(function (e) {\n    e.preventDefault();\n    const isCheckedInput = document.getElementById('c1');\n    const input = document.querySelector('.cc-number-input');\n    const tegErrorForm = document.querySelector('.stock-banner__form');\n    const mainWrapper = document.querySelector('.stock-banner__right');\n    const appendHTML = document.querySelector('.stock-banner__wrap-empty');\n    const tegInputWrapper = document.querySelector('.stock-banner__wrap-input');\n    const textHTMLEmpty = '<p class=\"stock-banner__field-empty\">Заповнить поле</p>';\n\n    if (!input.value.length || !isCheckedInput.checked) {\n      tegInputWrapper.classList.add('stock-banner__wrap-input--active');\n      appendHTML.innerHTML = textHTMLEmpty;\n    } else {\n      $.ajax({\n        method: 'POST',\n        url: 'https://jsonplaceholder.typicode.com/posts',\n        dataType: 'json',\n        data: {\n          'number': input.value\n        },\n        success: function (data) {\n          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');\n          tegErrorForm.classList.remove('stock-banner__form-error');\n\n          if (data) {\n            mainWrapper.classList.add('stock-banner__right-registration');\n          }\n        },\n        error: function (er) {\n          tegErrorForm.classList.add('stock-banner__form-error');\n          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');\n        }\n      });\n    }\n  });\n\n  function formUserExists() {\n    let wrapperHTML = document.querySelector('.stock-banner__right');\n    wrapperHTML.classList.add('stock-banner__right-user');\n    wrapperHTML.classList.remove('stock-banner__right-registration');\n    wrapperHTML.classList.remove('stock-banner__right-finish');\n  }\n\n  ;\n\n  function formFinish() {\n    let wrapperHTML = document.querySelector('.stock-banner__right');\n    wrapperHTML.classList.add('stock-banner__right-finish');\n    wrapperHTML.classList.remove('stock-banner__right-user');\n    wrapperHTML.classList.remove('stock-banner__right-registration');\n  }\n\n  ; // Input number mask\n\n  $('#cc-number-input').mask('AAAA AAAA AAAA AAAA');\n  $('.stock-banner__wrap-svg').click(function (e) {\n    e.preventDefault();\n    const passwordInput = document.querySelector('.cc-number-input');\n\n    if (passwordInput.type === 'password') {\n      passwordInput.type = 'text';\n    } else {\n      passwordInput.type = 'password';\n    }\n  }); // Popup cookie\n\n  var checkCookie = localStorage.getItem('cookie');\n\n  if (!checkCookie) {\n    $('#cookie').removeClass('hide');\n  }\n\n  $('#cookie .cookie__btn').click(function () {\n    localStorage.setItem('cookie', true);\n    $('#cookie').addClass('hide');\n  }); // Timer\n\n  var countDownDate = new Date('Jan 5, 2022 15:37:25').getTime();\n  var x = setInterval(function () {\n    var now = new Date().getTime();\n    var distance = countDownDate - now;\n    var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n    var timerHTML = `<div class=\"timer__block\">\n        <time class=\"timer__count\">${days}</time>\n        <p class=\"timer__string\">днiв</p>\n      </div>\n      <div class=\"timer__block\">\n        <time class=\"timer__count\">${hours}</time>\n        <p class=\"timer__string\">годин</p>\n      </div>\n      <div class=\"timer__block\">\n        <time class=\"timer__count\">${minutes}</time>\n         <p class=\"timer__string\">хвилин</p>\n      </div>`;\n    $('#timer').html(timerHTML);\n\n    if (distance < 0) {\n      clearInterval(x);\n      $('#timer').html('EXPIRED');\n    }\n  }, 1000);\n}); // After scroll hide btn\n\njQuery(window).scroll(function () {\n  if (window.screen.width < 700) {\n    if (jQuery(this).scrollTop() > 0) {\n      jQuery('.header-mobile__btn').fadeOut();\n    } else {\n      jQuery('.header-mobile__btn').fadeIn();\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2F5SGVsbG8gZnJvbSAnLi9saWIvc2F5SGVsbG8uanMnO1xuXG5zYXlIZWxsbygpO1xuY29uc29sZS5sb2coJ2FwcC5qcycpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAvLyBTbGlkZXJcbiAgbGV0IHNsaWRlclJldmlldyA9ICQoJyNnYWxsZXJ5JykubGlnaHRTbGlkZXIoe1xuICAgIGl0ZW06IDMsXG4gICAgc2xpZGVNYXJnaW46IDc3LFxuICAgIHBhZ2VyOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHBhdXNlOiAxMDAwLFxuICAgIG9uQWZ0ZXJTbGlkZTogZnVuY3Rpb24oZWwpIHtcbiAgICAgIGRpc2FibGVTbGlkZXJCdG4oZWwpO1xuICAgIH0sIFxuICAgIHJlc3BvbnNpdmUgOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpdGVtOiAyLFxuICAgICAgICAgIHNsaWRlTW92ZTogMSxcbiAgICAgICAgICBzbGlkZU1hcmdpbjogNixcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGl0ZW06IDEuNSxcbiAgICAgICAgICBzbGlkZU1vdmU6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRpc2FibGVTbGlkZXJCdG4oc2xpZGVyKSB7XG4gICAgJCgnI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tcHJldiwgI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tbmV4dCcpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2J0bi0tZGlzYWJsZWQnKTtcbiAgICBpZiggc2xpZGVyLmdldEN1cnJlbnRTbGlkZUNvdW50KCkgPCAyKSB7XG4gICAgICAkKCcjZ2FsbGVyeS1idG4gLnNsaWRlcl9fYnRuLS1wcmV2JykuYWRkQ2xhc3MoJ3NsaWRlcl9fYnRuLS1kaXNhYmxlZCcpO1xuICAgIH1cbiAgICBpZihzbGlkZXIuZ2V0Q3VycmVudFNsaWRlQ291bnQoKSA+IHNsaWRlci5nZXRUb3RhbFNsaWRlQ291bnQoKS0zKSB7XG4gICAgICAkKCcjZ2FsbGVyeS1idG4gLnNsaWRlcl9fYnRuLS1uZXh0JykuYWRkQ2xhc3MoJ3NsaWRlcl9fYnRuLS1kaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlclJldmlldy5sZW5ndGggPiAwICYmIGRpc2FibGVTbGlkZXJCdG4oc2xpZGVyUmV2aWV3KTtcblxuICAkKCcjZ2FsbGVyeS1idG4gLnNsaWRlcl9fYnRuLS1wcmV2JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIHNsaWRlclJldmlldy5nb1RvUHJldlNsaWRlKCk7XG4gIH0pO1xuXG4gICQoJyNnYWxsZXJ5LWJ0biAuc2xpZGVyX19idG4tLW5leHQnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgc2xpZGVyUmV2aWV3LmdvVG9OZXh0U2xpZGUoKTtcbiAgfSk7XG5cbiAgLy8gYWNjb3JkaW9uXG4gICQoJy5mYXFfX2FjY29yZGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc1RvZ2dsZSA9ICEkKHRoaXMpLmhhc0NsYXNzKCdmYXFfX2FjY29yZGlvbi0tYWN0aXZlJyk7XG5cbiAgICAkKCcuZmFxX19hY2NvcmRpb24nKS5yZW1vdmVDbGFzcygnZmFxX19hY2NvcmRpb24tLWFjdGl2ZScpO1xuICAgICQoJy5mYXFfX2FjY29yZGlvbiAuZmFxX19hY2NvcmRpb24tYm9keScpLnNsaWRlVXAoMzAwKTtcblxuICAgIGlmKGlzVG9nZ2xlKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdmYXFfX2FjY29yZGlvbi0tYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5mYXFfX2FjY29yZGlvbi1ib2R5Jykuc2xpZGVEb3duKDMwMCk7XG4gICAgfVxuICB9KTtcblxuXG4gICQoJy5zdG9jay1iYW5uZXJfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBpc0NoZWNrZWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjMScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNjLW51bWJlci1pbnB1dCcpO1xuICAgIGNvbnN0IHRlZ0Vycm9yRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9jay1iYW5uZXJfX2Zvcm0nKTtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9jay1iYW5uZXJfX3JpZ2h0Jyk7XG4gICAgY29uc3QgYXBwZW5kSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9jay1iYW5uZXJfX3dyYXAtZW1wdHknKTtcbiAgICBjb25zdCB0ZWdJbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvY2stYmFubmVyX193cmFwLWlucHV0Jyk7XG5cbiAgICBjb25zdCB0ZXh0SFRNTEVtcHR5ID0gJzxwIGNsYXNzPVwic3RvY2stYmFubmVyX19maWVsZC1lbXB0eVwiPtCX0LDQv9C+0LLQvdC40YLRjCDQv9C+0LvQtTwvcD4nO1xuXG4gICAgaWYgKCFpbnB1dC52YWx1ZS5sZW5ndGggfHwgIWlzQ2hlY2tlZElucHV0LmNoZWNrZWQpIHtcbiAgICAgIHRlZ0lucHV0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdG9jay1iYW5uZXJfX3dyYXAtaW5wdXQtLWFjdGl2ZScpO1xuICAgICAgYXBwZW5kSFRNTC5pbm5lckhUTUwgPSB0ZXh0SFRNTEVtcHR5O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgJ251bWJlcic6IGlucHV0LnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgdGVnSW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b2NrLWJhbm5lcl9fd3JhcC1pbnB1dC0tYWN0aXZlJyk7XG4gICAgICAgICAgdGVnRXJyb3JGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b2NrLWJhbm5lcl9fZm9ybS1lcnJvcicpO1xuXG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3N0b2NrLWJhbm5lcl9fcmlnaHQtcmVnaXN0cmF0aW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXIpIHtcbiAgICAgICAgICB0ZWdFcnJvckZvcm0uY2xhc3NMaXN0LmFkZCgnc3RvY2stYmFubmVyX19mb3JtLWVycm9yJyk7XG4gICAgICAgICAgdGVnSW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b2NrLWJhbm5lcl9fd3JhcC1pbnB1dC0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZm9ybVVzZXJFeGlzdHMoKSB7XG4gICAgbGV0IHdyYXBwZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b2NrLWJhbm5lcl9fcmlnaHQnKTtcblxuICAgIHdyYXBwZXJIVE1MLmNsYXNzTGlzdC5hZGQoJ3N0b2NrLWJhbm5lcl9fcmlnaHQtdXNlcicpO1xuXG4gICAgd3JhcHBlckhUTUwuY2xhc3NMaXN0LnJlbW92ZSgnc3RvY2stYmFubmVyX19yaWdodC1yZWdpc3RyYXRpb24nKTtcbiAgICB3cmFwcGVySFRNTC5jbGFzc0xpc3QucmVtb3ZlKCdzdG9jay1iYW5uZXJfX3JpZ2h0LWZpbmlzaCcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZvcm1GaW5pc2goKSB7XG4gICAgbGV0IHdyYXBwZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b2NrLWJhbm5lcl9fcmlnaHQnKTtcblxuICAgIHdyYXBwZXJIVE1MLmNsYXNzTGlzdC5hZGQoJ3N0b2NrLWJhbm5lcl9fcmlnaHQtZmluaXNoJyk7XG5cbiAgICB3cmFwcGVySFRNTC5jbGFzc0xpc3QucmVtb3ZlKCdzdG9jay1iYW5uZXJfX3JpZ2h0LXVzZXInKTtcbiAgICB3cmFwcGVySFRNTC5jbGFzc0xpc3QucmVtb3ZlKCdzdG9jay1iYW5uZXJfX3JpZ2h0LXJlZ2lzdHJhdGlvbicpO1xuICB9O1xuXG4gIC8vIElucHV0IG51bWJlciBtYXNrXG4gICQoJyNjYy1udW1iZXItaW5wdXQnKS5tYXNrKCdBQUFBIEFBQUEgQUFBQSBBQUFBJyk7XG5cbiAgJCgnLnN0b2NrLWJhbm5lcl9fd3JhcC1zdmcnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2MtbnVtYmVyLWlucHV0Jyk7XG5cbiAgICBpZihwYXNzd29yZElucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBQb3B1cCBjb29raWVcbiAgdmFyIGNoZWNrQ29va2llID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZScpO1xuICBpZiAoIWNoZWNrQ29va2llKSB7XG4gICAgJCgnI2Nvb2tpZScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gIH1cblxuICAkKCcjY29va2llIC5jb29raWVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWUnLCB0cnVlKTtcbiAgICAkKCcjY29va2llJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgfSk7XG5cbiAgLy8gVGltZXJcbiAgdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnSmFuIDUsIDIwMjIgMTU6Mzc6MjUnKS5nZXRUaW1lKCk7XG5cbiAgdmFyIHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuXG4gICAgdmFyIHRpbWVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGltZXJfX2Jsb2NrXCI+XG4gICAgICAgIDx0aW1lIGNsYXNzPVwidGltZXJfX2NvdW50XCI+JHtkYXlzfTwvdGltZT5cbiAgICAgICAgPHAgY2xhc3M9XCJ0aW1lcl9fc3RyaW5nXCI+0LTQvWnQsjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWVyX19ibG9ja1wiPlxuICAgICAgICA8dGltZSBjbGFzcz1cInRpbWVyX19jb3VudFwiPiR7aG91cnN9PC90aW1lPlxuICAgICAgICA8cCBjbGFzcz1cInRpbWVyX19zdHJpbmdcIj7Qs9C+0LTQuNC9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGltZXJfX2Jsb2NrXCI+XG4gICAgICAgIDx0aW1lIGNsYXNzPVwidGltZXJfX2NvdW50XCI+JHttaW51dGVzfTwvdGltZT5cbiAgICAgICAgIDxwIGNsYXNzPVwidGltZXJfX3N0cmluZ1wiPtGF0LLQuNC70LjQvTwvcD5cbiAgICAgIDwvZGl2PmA7XG5cbiAgICAkKCcjdGltZXInKS5odG1sKHRpbWVySFRNTCk7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHgpO1xuICAgICAgJCgnI3RpbWVyJykuaHRtbCgnRVhQSVJFRCcpO1xuICAgIH1cbiAgfSwgMTAwMCk7XG59KTtcblxuLy8gQWZ0ZXIgc2Nyb2xsIGhpZGUgYnRuXG5qUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDwgNzAwKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcbiAgICAgIGpRdWVyeSgnLmhlYWRlci1tb2JpbGVfX2J0bicpLmZhZGVPdXQoKTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkoJy5oZWFkZXItbW9iaWxlX19idG4nKS5mYWRlSW4oKTtcbiAgICB9IFxuICB9XG59KTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBbEJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sayHello() {\n  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n    var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n    window.console.log.apply(console, args);\n  } else if (window.console) {\n    window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n  }\n}\n\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2F5SGVsbG8uanM/OWU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzYXlIZWxsbygpIHtcbiAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgdmFyIGFyZ3MgPSBbJ1xcbiAlYyBNYWRlIHdpdGgg4p2k77iPIGJ5IFJpdmVyY29kZSAlYyBodHRwOi8vd3d3LnJpdmVyY28uZGUvICVjICVjIPCfkLMgXFxuXFxuJywgJ2JvcmRlcjogMXB4IHNvbGlkICMwMDA7Y29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmYwMDE7IHBhZGRpbmc6NXB4IDA7JywgJ2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMWMxYzFjOyBwYWRkaW5nOjVweCAwO2JvcmRlcjogMXB4IHNvbGlkICMwMDA7JywgJ2JhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6NXB4IDA7JywgJ2NvbG9yOiAjYjA5NzZkOyBiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOjVweCAwOyddO1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUg4p2k77iPIFJpdmVyY28uZGUgLSBodHRwOi8vd3d3LnJpdmVyY28uZGUvICDinaTvuI8nKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzYXlIZWxsbztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ })

/******/ });