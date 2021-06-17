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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sayHello.js */ \"./lib/sayHello.js\");\n/* harmony import */ var _lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0__);\n\n_lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0___default()();\nconsole.log('app.js');\n$(function () {\n  // Slider\n  let sliderReview = $('#gallery').lightSlider({\n    item: 3,\n    slideMargin: 77,\n    pager: false,\n    speed: 500,\n    pause: 1000,\n    onAfterSlide: function (el) {\n      disableSliderBtn(el);\n    },\n    responsive: [{\n      breakpoint: 800,\n      settings: {\n        item: 2,\n        slideMove: 1,\n        slideMargin: 6\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        item: 1.5,\n        slideMove: 1\n      }\n    }]\n  });\n\n  function disableSliderBtn(slider) {\n    $('#gallery-btn .slider__btn--prev, #gallery-btn .slider__btn--next').removeClass('slider__btn--disabled');\n\n    if (slider.getCurrentSlideCount() < 2) {\n      $('#gallery-btn .slider__btn--prev').addClass('slider__btn--disabled');\n    }\n\n    if (slider.getCurrentSlideCount() > slider.getTotalSlideCount() - 3) {\n      $('#gallery-btn .slider__btn--next').addClass('slider__btn--disabled');\n    }\n  }\n\n  sliderReview.length > 0 && disableSliderBtn(sliderReview);\n  $('#gallery-btn .slider__btn--prev').click(function (e) {\n    sliderReview.goToPrevSlide();\n  });\n  $('#gallery-btn .slider__btn--next').click(function (e) {\n    sliderReview.goToNextSlide();\n  }); // accordion\n\n  $('.faq__accordion').click(function () {\n    var isToggle = !$(this).hasClass('faq__accordion--active');\n    $('.faq__accordion').removeClass('faq__accordion--active');\n    $('.faq__accordion .faq__accordion-body').slideUp(300);\n\n    if (isToggle) {\n      $(this).addClass('faq__accordion--active');\n      $(this).find('.faq__accordion-body').slideDown(300);\n    }\n  });\n  $('.stock-banner__btn').click(function (e) {\n    e.preventDefault();\n    const input = document.querySelector('.cc-number-input');\n    const tegErrorForm = document.querySelector('.stock-banner__form');\n    const mainWrapper = document.querySelector('.stock-banner__right');\n    const appendHTML = document.querySelector('.stock-banner__wrap-empty');\n    const tegInputWrapper = document.querySelector('.stock-banner__wrap-input');\n    const textHTMLEmpty = '<p class=\"stock-banner__field-empty\">Заповнить поле</p>';\n\n    if (!input.value.length) {\n      tegInputWrapper.classList.add('stock-banner__wrap-input--active');\n      appendHTML.innerHTML = textHTMLEmpty;\n    } else {\n      $.ajax({\n        method: 'POST',\n        url: 'https://jsonplaceholder.typicode.com/posts',\n        dataType: 'json',\n        data: {\n          'number': input.value\n        },\n        success: function (data) {\n          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');\n          tegErrorForm.classList.remove('stock-banner__form-error');\n\n          if (data) {\n            mainWrapper.classList.add('stock-banner__right-registration');\n          }\n        },\n        error: function (er) {\n          console.log('er: ', er);\n          tegErrorForm.classList.add('stock-banner__form-error');\n          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');\n        }\n      });\n    }\n  }); // input number mask\n\n  $('#cc-number-input').mask('AAAA AAAA AAAA AAAA');\n  $('.stock-banner__wrap-svg').click(function (e) {\n    e.preventDefault();\n    const passwordInput = document.querySelector('.cc-number-input');\n\n    if (passwordInput.type === 'password') {\n      passwordInput.type = 'text';\n    } else {\n      passwordInput.type = 'password';\n    }\n  }); // Popup cookie\n\n  var checkCookie = localStorage.getItem('cookie');\n\n  if (!checkCookie) {\n    $('#cookie').removeClass('hide');\n  }\n\n  $('#cookie .cookie__btn').click(function () {\n    localStorage.setItem('cookie', true);\n    $('#cookie').addClass('hide');\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2F5SGVsbG8gZnJvbSAnLi9saWIvc2F5SGVsbG8uanMnO1xyXG5cclxuc2F5SGVsbG8oKTtcclxuY29uc29sZS5sb2coJ2FwcC5qcycpO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAvLyBTbGlkZXJcclxuICBsZXQgc2xpZGVyUmV2aWV3ID0gJCgnI2dhbGxlcnknKS5saWdodFNsaWRlcih7XHJcbiAgICBpdGVtOiAzLFxyXG4gICAgc2xpZGVNYXJnaW46IDc3LFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHBhdXNlOiAxMDAwLFxyXG4gICAgb25BZnRlclNsaWRlOiBmdW5jdGlvbihlbCkge1xyXG4gICAgICBkaXNhYmxlU2xpZGVyQnRuKGVsKTtcclxuICAgIH0sIFxyXG4gICAgcmVzcG9uc2l2ZSA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgaXRlbTogMixcclxuICAgICAgICAgIHNsaWRlTW92ZTogMSxcclxuICAgICAgICAgIHNsaWRlTWFyZ2luOiA2LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgaXRlbTogMS41LFxyXG4gICAgICAgICAgc2xpZGVNb3ZlOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyQnRuKHNsaWRlcikge1xyXG4gICAgJCgnI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tcHJldiwgI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tbmV4dCcpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2J0bi0tZGlzYWJsZWQnKTtcclxuICAgIGlmKCBzbGlkZXIuZ2V0Q3VycmVudFNsaWRlQ291bnQoKSA8Mikge1xyXG4gICAgICAkKCcjZ2FsbGVyeS1idG4gLnNsaWRlcl9fYnRuLS1wcmV2JykuYWRkQ2xhc3MoJ3NsaWRlcl9fYnRuLS1kaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYoc2xpZGVyLmdldEN1cnJlbnRTbGlkZUNvdW50KCk+c2xpZGVyLmdldFRvdGFsU2xpZGVDb3VudCgpLTMpIHtcclxuICAgICAgJCgnI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tbmV4dCcpLmFkZENsYXNzKCdzbGlkZXJfX2J0bi0tZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2xpZGVyUmV2aWV3Lmxlbmd0aD4wICYmIGRpc2FibGVTbGlkZXJCdG4oc2xpZGVyUmV2aWV3KTtcclxuXHJcbiAgJCgnI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tcHJldicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHNsaWRlclJldmlldy5nb1RvUHJldlNsaWRlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNnYWxsZXJ5LWJ0biAuc2xpZGVyX19idG4tLW5leHQnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBzbGlkZXJSZXZpZXcuZ29Ub05leHRTbGlkZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBhY2NvcmRpb25cclxuICAkKCcuZmFxX19hY2NvcmRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIHZhciBpc1RvZ2dsZSA9ICEkKHRoaXMpLmhhc0NsYXNzKCdmYXFfX2FjY29yZGlvbi0tYWN0aXZlJyk7XHJcbiAgICAkKCcuZmFxX19hY2NvcmRpb24nKS5yZW1vdmVDbGFzcygnZmFxX19hY2NvcmRpb24tLWFjdGl2ZScpO1xyXG4gICAgJCgnLmZhcV9fYWNjb3JkaW9uIC5mYXFfX2FjY29yZGlvbi1ib2R5Jykuc2xpZGVVcCgzMDApO1xyXG4gICAgaWYoaXNUb2dnbGUpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZmFxX19hY2NvcmRpb24tLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJy5mYXFfX2FjY29yZGlvbi1ib2R5Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnLnN0b2NrLWJhbm5lcl9fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNjLW51bWJlci1pbnB1dCcpO1xyXG4gICAgY29uc3QgdGVnRXJyb3JGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b2NrLWJhbm5lcl9fZm9ybScpO1xyXG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvY2stYmFubmVyX19yaWdodCcpO1xyXG4gICAgY29uc3QgYXBwZW5kSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9jay1iYW5uZXJfX3dyYXAtZW1wdHknKTtcclxuICAgIGNvbnN0IHRlZ0lucHV0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9jay1iYW5uZXJfX3dyYXAtaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0SFRNTEVtcHR5ID0gJzxwIGNsYXNzPVwic3RvY2stYmFubmVyX19maWVsZC1lbXB0eVwiPtCX0LDQv9C+0LLQvdC40YLRjCDQv9C+0LvQtTwvcD4nO1xyXG5cclxuICAgIGlmICghaW5wdXQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHRlZ0lucHV0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdG9jay1iYW5uZXJfX3dyYXAtaW5wdXQtLWFjdGl2ZScpO1xyXG4gICAgICBhcHBlbmRIVE1MLmlubmVySFRNTCA9IHRleHRIVE1MRW1wdHk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgJ251bWJlcic6IGlucHV0LnZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgdGVnSW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b2NrLWJhbm5lcl9fd3JhcC1pbnB1dC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICB0ZWdFcnJvckZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc3RvY2stYmFubmVyX19mb3JtLWVycm9yJyk7XHJcblxyXG4gICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RvY2stYmFubmVyX19yaWdodC1yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2VyOiAnLCBlcik7XHJcbiAgICAgICAgICB0ZWdFcnJvckZvcm0uY2xhc3NMaXN0LmFkZCgnc3RvY2stYmFubmVyX19mb3JtLWVycm9yJyk7XHJcbiAgICAgICAgICB0ZWdJbnB1dFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RvY2stYmFubmVyX193cmFwLWlucHV0LS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBpbnB1dCBudW1iZXIgbWFza1xyXG4gICQoJyNjYy1udW1iZXItaW5wdXQnKS5tYXNrKCdBQUFBIEFBQUEgQUFBQSBBQUFBJyk7XHJcblxyXG4gICQoJy5zdG9jay1iYW5uZXJfX3dyYXAtc3ZnJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYy1udW1iZXItaW5wdXQnKTtcclxuXHJcbiAgICBpZihwYXNzd29yZElucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIFxyXG4gIFxyXG4gIC8vIFBvcHVwIGNvb2tpZVxyXG5cclxuICB2YXIgY2hlY2tDb29raWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29va2llJyk7XHJcbiAgaWYgKCFjaGVja0Nvb2tpZSkge1xyXG4gICAgJCgnI2Nvb2tpZScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgfVxyXG5cclxuICAkKCcjY29va2llIC5jb29raWVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZScsIHRydWUpO1xyXG4gICAgJCgnI2Nvb2tpZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBbEJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sayHello() {\n  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n    var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n    window.console.log.apply(console, args);\n  } else if (window.console) {\n    window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n  }\n}\n\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2F5SGVsbG8uanM/OWU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzYXlIZWxsbygpIHtcclxuICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcclxuICAgIHZhciBhcmdzID0gWydcXG4gJWMgTWFkZSB3aXRoIOKdpO+4jyBieSBSaXZlcmNvZGUgJWMgaHR0cDovL3d3dy5yaXZlcmNvLmRlLyAlYyAlYyDwn5CzIFxcblxcbicsICdib3JkZXI6IDFweCBzb2xpZCAjMDAwO2NvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmMDAxOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzFjMWMxYzsgcGFkZGluZzo1cHggMDtib3JkZXI6IDFweCBzb2xpZCAjMDAwOycsICdiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2IwOTc2ZDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnXTtcclxuICAgIHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XHJcbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ01hZGUgd2l0aCBsb3ZlIOKdpO+4jyBSaXZlcmNvLmRlIC0gaHR0cDovL3d3dy5yaXZlcmNvLmRlLyAg4p2k77iPJyk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ })

/******/ });