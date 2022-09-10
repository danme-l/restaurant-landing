/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage() {\n    const mainSectionContact = document.createElement('main');\n\n    const contactHead = document.createElement('h1');\n    contactHead.innerHTML = 'Important Contacts';\n\n    const rodgers = document.createElement('div');\n    rodgers.classList.add('contact-box');\n    rodgers.setAttribute('id', 'rodgers-container');\n    rodgers.innerHTML = `\n    <div class='contact-content'>\n        <h3> Aaron Rodgers </h3>\n        <h5> Head Server </h5>\n        <p> He came to preach about chem trails and throw darts, and he's all out of chem trails </p>\n    </div>\n    `\n    const rodgersPic = document.createElement('div');\n    rodgersPic.setAttribute('id', 'rodgers-pic');\n    rodgersPic.classList.add('contact-photo')\n    rodgers.append(rodgersPic);\n\n    const favre = document.createElement('div');\n    favre.classList.add('contact-box');\n    favre.setAttribute('id', 'favre-container');\n    favre.innerHTML = `\n    <div class='contact-content'>\n        <h3> Brett Favre </h3>\n        <h5> Former Head Server </h5>\n        <p> Catch him sending unsolicited pictures of his dick to reporters </p>\n    </div>\n    `;\n    const favrePic = document.createElement('div');\n    favrePic.setAttribute('id', 'favre-pic');\n    favrePic.classList.add('contact-photo');\n    favre.append(favrePic);\n\n\n    const lafleur = document.createElement('div');\n    lafleur.classList.add('contact-box');\n    lafleur.setAttribute('id', 'lafleur-container');\n    lafleur.innerHTML = `\n    <div class='contact-content'>\n        <h3> Matt Lafleur </h3>\n        <h5> Head Chef </h5>\n        <p> Only Chef to serve 13 straight michelin star masterpieces in each of his first three years </p>\n    </div>\n    `;\n    const lafleurPic = document.createElement('div');\n    lafleurPic.setAttribute('id', 'lafleur-pic');\n    lafleurPic.classList.add('contact-photo');\n    lafleur.append(lafleurPic);\n\n    const lombardi = document.createElement('div');\n    lombardi.classList.add('contact-box');\n    lombardi.setAttribute('id', 'lombardi-container');\n    lombardi.innerHTML = `\n    <div class='contact-content'>\n        <h3> Vince Lombardi </h3>\n        <h5> Founding Chef </h5>\n        <p> So widely respected and succesful that they named the chef's trophy after him </p>\n    </div>\n    `\n    const lombardiPic = document.createElement('div');\n    lombardiPic.setAttribute('id', 'lombardi-pic');\n    lombardiPic.classList.add('contact-photo');\n    lombardi.append(lombardiPic);\n\n    mainSectionContact.append(contactHead, rodgers, favre, lafleur, lombardi);\n\n    return mainSectionContact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = document.createElement('footer');\nconst footerNameIcon = document.createElement('h4');\nfooterNameIcon.innerHTML = \"Dan Meleras <a href='https://github.com/danme-l'><i class='fa-brands fa-github'></i></a>\";\nconst footerContent = document.createElement('p');\nfooterContent.innerHTML = \"As part of the Odin Project Web Dev Curriculum\";\nfooter.appendChild(footerNameIcon);\nfooter.appendChild(footerContent);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Homepage \nfunction createHomepage() {\n    const mainSectionHome = document.createElement('main');\n\n    // home page header\n    const homeHeader = document.createElement('h1');\n    homeHeader.innerHTML = 'NFC North Domination \t&agrave; la carte';\n    homeHeader.setAttribute('id','home-header');\n    homeHeader.classList.add('content-header');\n    \n    const homeContent = document.createElement('div');\n    homeContent.innerHTML = 'Where you can come to feast on Minnesota, Chicago and Detroit Delicacies while you watch the Packers cruise to division mastery yet again';\n    homeContent.setAttribute('id', 'home-content');\n    \n    // hours\n    const hoursBox = document.createElement('div');\n    hoursBox.setAttribute('id', 'hours-box');\n    \n    const offseasonHours = document.createElement('div');\n    offseasonHours.innerHTML = `\n        <h3>February to August: </h3>\n        <p>  -  Closed.</p>\n        `;\n    const fallHours = document.createElement('div');\n    fallHours.innerHTML = `\n        <h3>September to December: </h3>\n        <p>  -  Sundays: 1 to midnight</p>\n        <p>  -  Occasional Thursday or Monday: 8:15 to midnight</p>\n        `;\n    const playoffHours = document.createElement('div');\n    playoffHours.innerHTML = `\n        <h3>January: </h3>\n        <p>  -  See 'Other Teams' section. </p>\n    `;\n    \n    hoursBox.append(offseasonHours, fallHours, playoffHours);\n    \n    //about\n    const aboutBox = document.createElement('div');\n    aboutBox.innerHTML = `\n    <h3>About</h3>\n    <p>Way back in the 2010 olympics, my parents started a tradition (superstition?)\n    of cooking meals native to the country that Team Canada's Hockey Team was playing. \n    The gold medal proved the validity of the strategy.\n    <br />\n    In the 2021 Green Bay Packers season, the Packers went 13-5 (including the playoffs).\n    13 times my girlfriend and I cooked or ordered an appropriate meal for the occasion.\n    5 times we either made it wrong or didn't eat anything. \n    <br /> <em>Need I say more?</em>\n    `\n    aboutBox.setAttribute('id', 'about-box');\n\n    mainSectionHome.append(homeHeader, homeContent,hoursBox, aboutBox);\n\n    return mainSectionHome;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepage);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n// retrieve the main container\nlet content = document.getElementById('content');\n\n/* --- HEADER --- */\nconst header = document.createElement('header');\n\n// home button\nconst homeBtn = document.createElement('button');\nhomeBtn.classList.add('header-btn');\nhomeBtn.innerHTML = \"Home\";\nhomeBtn.onclick = goToHome;\n\n// menu button\nconst menuBtn = document.createElement('button');\nmenuBtn.classList.add('header-btn');\nmenuBtn.innerHTML = \"Menu\";\nmenuBtn.onclick = goToMenu;\n\n// contact\nconst contactBtn = document.createElement('button');\ncontactBtn.classList.add('header-btn');\ncontactBtn.innerHTML = \"Contact\";\ncontactBtn.onclick = goToContact;\n\n// button functions\nfunction goToHome() {\n    mainSectionContainer.innerHTML = '';\n    mainSectionContainer.append((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    setActiveTab(homeBtn);\n};\nfunction goToMenu() {\n    mainSectionContainer.innerHTML = '';\n    mainSectionContainer.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    setActiveTab(menuBtn);\n};\nfunction goToContact() {\n    mainSectionContainer.innerHTML = '';\n    mainSectionContainer.append((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    setActiveTab(contactBtn);\n};\n\nheader.append(homeBtn, menuBtn, contactBtn);\n\n\n/* --- MAIN --- */\nconst mainSectionContainer = document.createElement('div');\nmainSectionContainer.setAttribute('id','main-sec-container');\n\n// Main\ncontent.append(header,mainSectionContainer,_footer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nwindow.onload = () => {\n    mainSectionContainer.append((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    setActiveTab(homeBtn);\n};\n\n// highlight current page on the nav bar\nfunction setActiveTab(btn) {\n    const buttons = document.querySelectorAll(\".header-btn\");\n    buttons.forEach((b) => {\n        b.classList.remove('active-tab');\n    })\n    btn.classList.add('active-tab');\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Menu\nfunction createMenu() {\n    const mainSectionMenu = document.createElement('main');\n\n    const menuHeader = document.createElement('h1');\n    menuHeader.innerHTML = 'NFC North Domination Menu';\n    menuHeader.setAttribute('id','home-header');\n    menuHeader.classList.add('content-header');\n\n    const vikingsMenu = document.createElement('div');\n    vikingsMenu.setAttribute('id', 'vikings-menu');\n    vikingsMenu.classList.add('menu-box');\n\n    const vikingsMenuHeader = document.createElement('h2');\n    vikingsMenuHeader.innerHTML = 'Playing the Vikings?';\n\n    const vikingsMenuContent = document.createElement('div');\n    vikingsMenuContent.innerHTML = `\n        <div class='menu-item'>\n        <h3> Juicy Lucy </h3>\n        <p> A Burger with cheese cooked right in the middle</p>\n        </div>\n        <div class='menu-item'>\n        <h3> Bloody Mary </h3>\n        <p> Classic Vodka and tomato juice cocktail </p>\n        </div>\n    `;\n    vikingsMenuContent.classList.add('menu-content');\n\n    vikingsMenu.append(vikingsMenuHeader, vikingsMenuContent);\n\n    const bearsMenu = document.createElement('div');\n    bearsMenu.setAttribute('id', 'bears-menu');\n    bearsMenu.classList.add('menu-box');\n\n    const bearsMenuHeader = document.createElement('h2');\n    bearsMenuHeader.innerHTML = 'Playing the Bears?';\n\n    const bearsMenuContent = document.createElement('div');\n    bearsMenuContent.innerHTML = `\n        <div class='menu-item'>\n        <h3> Chicago Deep Dish </h3>\n        <p> Classic Chicago Deep Dish Pizza </p>\n        </div>\n        <div class='menu-item'>\n        <h3> Pepper'n'egg Sandwich </h3>\n        <p> Exactly what it sounds like </p>\n        </div>\n    `;\n\n    bearsMenuContent.classList.add('menu-content');\n\n    bearsMenu.append(bearsMenuHeader, bearsMenuContent);\n\n    const lionsMenu = document.createElement('div');\n    lionsMenu.setAttribute('id', 'lions-menu');\n    lionsMenu.classList.add('menu-box');\n\n    const lionsMenuHeader = document.createElement('h2');\n    lionsMenuHeader.innerHTML = 'Playing the Lions?';\n\n    const lionsMenuContent = document.createElement('div');\n    lionsMenuContent.innerHTML = `\n        <div class='menu-item'>\n        <h3> Detroit Deep Dish </h3>\n        <p> Square-Shaped, cubed cheddar, and sauce over the cheese </p>\n        </div>\n        <div>\n        <h3 class='menu-item'>Coney Island Dog</h3>\n        <p> Served with Chili Fries </p>\n        </div>\n    `;\n\n    lionsMenuContent.classList.add('menu-content');\n\n    lionsMenu.append(lionsMenuHeader, lionsMenuContent);\n\n    mainSectionMenu.append(menuHeader, vikingsMenu, bearsMenu, lionsMenu);\n\n    return mainSectionMenu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;