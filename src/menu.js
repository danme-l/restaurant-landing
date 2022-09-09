// Menu
function createMenu() {
    const mainSectionMenu = document.createElement('main');

    const menuHeader = document.createElement('h1');
    menuHeader.innerHTML = 'NFC North Domination Menu';
    menuHeader.setAttribute('id','home-header');
    menuHeader.classList.add('content-header');

    const vikingsMenu = document.createElement('div');
    vikingsMenu.setAttribute('id', 'vikings-menu');
    vikingsMenu.classList.add('menu-box');

    const vikingsMenuHeader = document.createElement('h2');
    vikingsMenuHeader.innerHTML = 'Playing the Vikings?';

    const vikingsMenuContent = document.createElement('div');
    vikingsMenuContent.innerHTML = `
        <div class='menu-item'>
        <h3> Juicy Lucy </h3>
        <p> A Burger with cheese cooked right in the middle</p>
        </div>
        <div class='menu-item'>
        <h3> Bloody Mary </h3>
        <p> Classic Vodka and tomato juice cocktail </p>
        </div>
    `;
    vikingsMenuContent.classList.add('menu-content');

    vikingsMenu.append(vikingsMenuHeader, vikingsMenuContent);

    const bearsMenu = document.createElement('div');
    bearsMenu.setAttribute('id', 'bears-menu');
    bearsMenu.classList.add('menu-box');

    const bearsMenuHeader = document.createElement('h2');
    bearsMenuHeader.innerHTML = 'Playing the Bears?';

    const bearsMenuContent = document.createElement('div');
    bearsMenuContent.innerHTML = `
        <div class='menu-item'>
        <h3> Chicago Deep Dish </h3>
        <p> Classic Chicago Deep Dish Pizza </p>
        </div>
        <div class='menu-item'>
        <h3> Pepper'n'egg Sandwich </h3>
        <p> Exactly what it sounds like </p>
        </div>
    `;

    bearsMenuContent.classList.add('menu-content');

    bearsMenu.append(bearsMenuHeader, bearsMenuContent);

    const lionsMenu = document.createElement('div');
    lionsMenu.setAttribute('id', 'lions-menu');
    lionsMenu.classList.add('menu-box');

    const lionsMenuHeader = document.createElement('h2');
    lionsMenuHeader.innerHTML = 'Playing the Lions?';

    const lionsMenuContent = document.createElement('div');
    lionsMenuContent.innerHTML = `
        <div class='menu-item'>
        <h3> Detroit Deep Dish </h3>
        <p> Square-Shaped, cubed cheddar, and sauce over the cheese </p>
        </div>
        <div>
        <h3 class='menu-item'>Coney Island Dog</h3>
        <p> Served with Chili Fries </p>
        </div>
    `;

    lionsMenuContent.classList.add('menu-content');

    lionsMenu.append(lionsMenuHeader, lionsMenuContent);

    mainSectionMenu.append(menuHeader, vikingsMenu, bearsMenu, lionsMenu);

    return mainSectionMenu;
}

export default createMenu;