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
    setActiveTab(homeBtn);
};
function goToMenu() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(createMenu());
    setActiveTab(menuBtn);
};
function goToContact() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(createContactPage());
    setActiveTab(contactBtn);
};

header.append(homeBtn, menuBtn, contactBtn);


/* --- MAIN --- */
const mainSectionContainer = document.createElement('div');
mainSectionContainer.setAttribute('id','main-sec-container');

// Main
content.append(header,mainSectionContainer,footer);

window.onload = () => {
    mainSectionContainer.append(createHomepage());
    setActiveTab(homeBtn);
};

// highlight current page on the nav bar
function setActiveTab(btn) {
    const buttons = document.querySelectorAll(".header-btn");
    buttons.forEach((b) => {
        b.classList.remove('active-tab');
    })
    btn.classList.add('active-tab');
};