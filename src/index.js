import footer from './footer.js';
import createHomepage from './homepage.js';
import createMenu from './menu.js';
import createContactPage from './contact.js';

// retrieve the main container
let content = document.getElementById('content');

/* --- HEADER --- */
const header = document.createElement('header');

// home button
const homeBtn = document.createElement('button');
homeBtn.classList.add('header-btn');
homeBtn.innerHTML = "Home";
homeBtn.onclick = goToHome;

// menu button
const menuBtn = document.createElement('button');
menuBtn.classList.add('header-btn');
menuBtn.innerHTML = "Menu";
menuBtn.onclick = goToMenu;

// contact
const contactBtn = document.createElement('button');
contactBtn.classList.add('header-btn');
contactBtn.innerHTML = "Contact";
contactBtn.onclick = goToContact;

// button functions
function goToHome() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(createHomepage());
};
function goToMenu() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(createMenu());
};
function goToContact() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(createContactPage());
};

header.append(homeBtn, menuBtn, contactBtn);


/* --- MAIN --- */
const mainSectionContainer = document.createElement('div');
mainSectionContainer.setAttribute('id','main-sec-container');

// Main
content.append(header,mainSectionContainer,footer);

window.onload(mainSectionContainer.append(createHomepage()));