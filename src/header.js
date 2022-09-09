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
    mainSectionContainer.append(mainSectionHome);
};
function goToMenu() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(mainSectionMenu);
};
function goToContact() {
    mainSectionContainer.innerHTML = '';
    mainSectionContainer.append(mainSectionContact);
};

header.append(homeBtn, menuBtn, contactBtn);

export default header;