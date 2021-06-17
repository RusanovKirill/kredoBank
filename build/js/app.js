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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sayHello.js */ \"./lib/sayHello.js\");\n/* harmony import */ var _lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0__);\n\n_lib_sayHello_js__WEBPACK_IMPORTED_MODULE_0___default()();\nconsole.log('app.js');\n$(function () {\n  // Slider\n  var sliderReview = $('#gallery').lightSlider({\n    item: 3,\n    slideMargin: 77,\n    pager: false,\n    speed: 500,\n    pause: 1000,\n    onBeforeStart: function onBeforeStart(item) {// console.log('item', item);\n      // console.log('getTotalSlideCount', item.getTotalSlideCount);\n      // console.log('item.len', item.length);\n    },\n    onSliderLoad: function onSliderLoad(el) {// console.log('onSliderLoad', el.getCurrentSlideCount());\n      // const currIndex = el.getCurrentSlideCount();\n      // if (currIndex === 1) {\n      //   $('.slider__btn--prev').addClass('slider__btn--active-prev');\n      // } else {\n      //   console.log('else');\n      //   $('.slider__btn--prev').removeClass('slider__btn--active-prev');\n      // }\n    },\n    onAfterSlide: function onAfterSlide(el) {// console.log('onAfterSlide', el);\n      // console.log('onAfterSlide 2', el.getTotalSlideCount());\n      // console.log('onAfterSlide 3', el.getCurrentSlideCount());\n      // const currentSlide = el.getCurrentSlideCount();\n      // if (currentSlide === 4) {\n      //   console.log('1111');\n      // }\n    },\n    responsive: [{\n      breakpoint: 800,\n      settings: {\n        item: 2,\n        slideMove: 1,\n        slideMargin: 6\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        item: 1.5,\n        slideMove: 1\n      }\n    }]\n  });\n  $('#gallery-btn .slider__btn--prev').click(function (e) {\n    sliderReview.goToPrevSlide();\n  });\n  $('#gallery-btn .slider__btn--next').click(function (e) {\n    sliderReview.goToNextSlide();\n  });\n  var acc = document.getElementsByClassName('faq__accordion');\n  var i;\n\n  for (i = 0; i < acc.length; i++) {\n    acc[i].onclick = function () {\n      var panel = this.nextElementSibling;\n      var coursePanel = document.getElementsByClassName('faq__accordion-body');\n      var courseAccordionActive = document.getElementsByClassName('faq__accordion faq__accordion--active');\n\n      if (panel.style.maxHeight) {\n        panel.style.maxHeight = null;\n        this.classList.remove('faq__accordion--active');\n      } else {\n        for (var ii = 0; ii < courseAccordionActive.length; ii++) {\n          courseAccordionActive[ii].classList.remove('faq__accordion--active');\n        }\n\n        for (var iii = 0; iii < coursePanel.length; iii++) {\n          this.classList.remove('faq__accordion--active');\n          coursePanel[iii].style.maxHeight = null;\n        }\n\n        panel.style.maxHeight = panel.scrollHeight + 'px';\n        this.classList.add('faq__accordion--active');\n      }\n    };\n  } // input number mask\n\n\n  $('#cc-number-input').mask('0000 0000 0000 0000');\n  $('.stock-banner__btn').click(function (e) {\n    e.preventDefault();\n    var input = document.querySelector('.cc-number-input');\n    var tegErrorForm = document.querySelector('.stock-banner__form');\n    var mainWrapper = document.querySelector('.stock-banner__right');\n    var appendHTML = document.querySelector('.stock-banner__wrap-empty');\n    var tegInputWrapper = document.querySelector('.stock-banner__wrap-input');\n    var textHTMLEmpty = '<p class=\"stock-banner__field-empty\">Заповнить поле</p>';\n\n    if (!input.value.length) {\n      tegInputWrapper.classList.add('stock-banner__wrap-input--active');\n      appendHTML.innerHTML = textHTMLEmpty;\n    } else {\n      $.ajax({\n        method: 'POST',\n        url: 'https://jsonplaceholder.typicode.com/posts',\n        dataType: 'json',\n        data: {\n          'number': input.value\n        },\n        success: function success(data) {\n          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');\n          tegErrorForm.classList.remove('stock-banner__form-error');\n\n          if (data) {\n            mainWrapper.classList.add('stock-banner__right-registration');\n          }\n        },\n        error: function error(er) {\n          console.log('er: ', er);\n          tegErrorForm.classList.add('stock-banner__form-error');\n          tegInputWrapper.classList.remove('stock-banner__wrap-input--active');\n        }\n      });\n    }\n  }); // function toggle() {\n\n  $('.stock-banner__wrap-svg').click(function (e) {\n    e.preventDefault();\n    var passwordInput = document.querySelector('.cc-number-input');\n    passwordInput.type === 'password' ? passwordInput.type = 'text' : passwordInput.type = 'password';\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2F5SGVsbG8gZnJvbSAnLi9saWIvc2F5SGVsbG8uanMnO1xuXG5zYXlIZWxsbygpO1xuY29uc29sZS5sb2coJ2FwcC5qcycpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAvLyBTbGlkZXJcbiAgbGV0IHNsaWRlclJldmlldyA9ICQoJyNnYWxsZXJ5JykubGlnaHRTbGlkZXIoe1xuICAgIGl0ZW06IDMsXG4gICAgc2xpZGVNYXJnaW46IDc3LFxuICAgIHBhZ2VyOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHBhdXNlOiAxMDAwLFxuICAgIG9uQmVmb3JlU3RhcnQ6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpdGVtJywgaXRlbSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0VG90YWxTbGlkZUNvdW50JywgaXRlbS5nZXRUb3RhbFNsaWRlQ291bnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW0ubGVuJywgaXRlbS5sZW5ndGgpO1xuICAgIH0sXG4gICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ29uU2xpZGVyTG9hZCcsIGVsLmdldEN1cnJlbnRTbGlkZUNvdW50KCkpO1xuICAgICAgLy8gY29uc3QgY3VyckluZGV4ID0gZWwuZ2V0Q3VycmVudFNsaWRlQ291bnQoKTtcbiAgICAgIC8vIGlmIChjdXJySW5kZXggPT09IDEpIHtcbiAgICAgIC8vICAgJCgnLnNsaWRlcl9fYnRuLS1wcmV2JykuYWRkQ2xhc3MoJ3NsaWRlcl9fYnRuLS1hY3RpdmUtcHJldicpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2Vsc2UnKTtcbiAgICAgIC8vICAgJCgnLnNsaWRlcl9fYnRuLS1wcmV2JykucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9fYnRuLS1hY3RpdmUtcHJldicpO1xuICAgICAgLy8gfVxuICAgIH0sXG4gICAgb25BZnRlclNsaWRlOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ29uQWZ0ZXJTbGlkZScsIGVsKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkFmdGVyU2xpZGUgMicsIGVsLmdldFRvdGFsU2xpZGVDb3VudCgpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkFmdGVyU2xpZGUgMycsIGVsLmdldEN1cnJlbnRTbGlkZUNvdW50KCkpO1xuICAgICAgLy8gY29uc3QgY3VycmVudFNsaWRlID0gZWwuZ2V0Q3VycmVudFNsaWRlQ291bnQoKTtcbiAgICAgIFxuICAgICAgLy8gaWYgKGN1cnJlbnRTbGlkZSA9PT0gNCkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnMTExMScpO1xuICAgICAgLy8gfVxuICAgIH0sIFxuICAgIHJlc3BvbnNpdmUgOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpdGVtOiAyLFxuICAgICAgICAgIHNsaWRlTW92ZTogMSxcbiAgICAgICAgICBzbGlkZU1hcmdpbjogNixcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGl0ZW06IDEuNSxcbiAgICAgICAgICBzbGlkZU1vdmU6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gIH0pO1xuXG4gICQoJyNnYWxsZXJ5LWJ0biAuc2xpZGVyX19idG4tLXByZXYnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgc2xpZGVyUmV2aWV3LmdvVG9QcmV2U2xpZGUoKTtcbiAgfSk7XG5cbiAgJCgnI2dhbGxlcnktYnRuIC5zbGlkZXJfX2J0bi0tbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBzbGlkZXJSZXZpZXcuZ29Ub05leHRTbGlkZSgpO1xuICB9KTtcblxuICBsZXQgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmFxX19hY2NvcmRpb24nKTtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xuXHQgIGFjY1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGxldCBjb3Vyc2VQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhcV9fYWNjb3JkaW9uLWJvZHknKTtcbiAgICAgIGxldCBjb3Vyc2VBY2NvcmRpb25BY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYXFfX2FjY29yZGlvbiBmYXFfX2FjY29yZGlvbi0tYWN0aXZlJyk7XG5cbiAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdmYXFfX2FjY29yZGlvbi0tYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgeyBcbiAgICAgICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGNvdXJzZUFjY29yZGlvbkFjdGl2ZS5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICBjb3Vyc2VBY2NvcmRpb25BY3RpdmVbaWldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcV9fYWNjb3JkaW9uLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGlpaSA9IDA7IGlpaSA8IGNvdXJzZVBhbmVsLmxlbmd0aDsgaWlpKyspIHtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcV9fYWNjb3JkaW9uLS1hY3RpdmUnKTtcbiAgICAgICAgICBjb3Vyc2VQYW5lbFtpaWldLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmYXFfX2FjY29yZGlvbi0tYWN0aXZlJyk7XG4gICAgICB9IFxuXHQgIH07XG4gIH1cblxuICAvLyBpbnB1dCBudW1iZXIgbWFza1xuICAkKCcjY2MtbnVtYmVyLWlucHV0JykubWFzaygnMDAwMCAwMDAwIDAwMDAgMDAwMCcpO1xuXG4gICQoJy5zdG9jay1iYW5uZXJfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYy1udW1iZXItaW5wdXQnKTtcbiAgICBjb25zdCB0ZWdFcnJvckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvY2stYmFubmVyX19mb3JtJyk7XG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvY2stYmFubmVyX19yaWdodCcpO1xuICAgIGNvbnN0IGFwcGVuZEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvY2stYmFubmVyX193cmFwLWVtcHR5Jyk7XG4gICAgY29uc3QgdGVnSW5wdXRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b2NrLWJhbm5lcl9fd3JhcC1pbnB1dCcpO1xuXG4gICAgY29uc3QgdGV4dEhUTUxFbXB0eSA9ICc8cCBjbGFzcz1cInN0b2NrLWJhbm5lcl9fZmllbGQtZW1wdHlcIj7Ql9Cw0L/QvtCy0L3QuNGC0Ywg0L/QvtC70LU8L3A+JztcblxuICAgIGlmICghaW5wdXQudmFsdWUubGVuZ3RoKSB7XG4gICAgICB0ZWdJbnB1dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RvY2stYmFubmVyX193cmFwLWlucHV0LS1hY3RpdmUnKTtcbiAgICAgIGFwcGVuZEhUTUwuaW5uZXJIVE1MID0gdGV4dEhUTUxFbXB0eTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICdudW1iZXInOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHRlZ0lucHV0V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzdG9jay1iYW5uZXJfX3dyYXAtaW5wdXQtLWFjdGl2ZScpO1xuICAgICAgICAgIHRlZ0Vycm9yRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9jay1iYW5uZXJfX2Zvcm0tZXJyb3InKTtcblxuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdG9jay1iYW5uZXJfX3JpZ2h0LXJlZ2lzdHJhdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2VyOiAnLCBlcik7XG4gICAgICAgICAgdGVnRXJyb3JGb3JtLmNsYXNzTGlzdC5hZGQoJ3N0b2NrLWJhbm5lcl9fZm9ybS1lcnJvcicpO1xuICAgICAgICAgIHRlZ0lucHV0V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzdG9jay1iYW5uZXJfX3dyYXAtaW5wdXQtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgXG4gICQoJy5zdG9jay1iYW5uZXJfX3dyYXAtc3ZnJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNjLW51bWJlci1pbnB1dCcpO1xuXG4gICAgcGFzc3dvcmRJbnB1dC50eXBlID09PSAncGFzc3dvcmQnID9cbiAgICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgICAgOlxuICAgICAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgfSk7XG59KTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBeENBO0FBa0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

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