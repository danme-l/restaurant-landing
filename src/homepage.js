// Homepage 
function createHomepage() {
    const mainSectionHome = document.createElement('main');

    // home page header
    const homeHeader = document.createElement('h1');
    homeHeader.innerHTML = 'NFC North Domination 	&agrave; la carte';
    homeHeader.setAttribute('id','home-header');
    homeHeader.classList.add('content-header');
    
    const homeContent = document.createElement('div');
    homeContent.innerHTML = 'Where you can come to feast on Minnesota, Chicago and Detroit Delicacies while you watch the Packers cruise to division mastery yet again';
    homeContent.setAttribute('id', 'home-content');
    
    // hours
    const hoursBox = document.createElement('div');
    hoursBox.setAttribute('id', 'hours-box');
    
    const offseasonHours = document.createElement('div');
    offseasonHours.innerHTML = `
        <h3>February to August: </h3>
        <p>  -  Closed.</p>
        `;
    const fallHours = document.createElement('div');
    fallHours.innerHTML = `
        <h3>September to December: </h3>
        <p>  -  Sundays: 1 to midnight</p>
        <p>  -  Occasional Thursday or Monday: 8:15 to midnight</p>
        `;
    const playoffHours = document.createElement('div');
    playoffHours.innerHTML = `
        <h3>January: </h3>
        <p>  -  See 'Other Teams' section. </p>
    `;
    
    hoursBox.append(offseasonHours, fallHours, playoffHours);
    
    //about
    const aboutBox = document.createElement('div');
    aboutBox.innerHTML = `
    <h3>About</h3>
    <p>Way back in the 2010 olympics, my parents started a tradition (superstition?)
    of cooking meals native to the country that Team Canada's Hockey Team was playing. 
    The gold medal proved the validity of the strategy.
    <br />
    In the 2021 Green Bay Packers season, the Packers went 13-5 (including the playoffs).
    13 times my girlfriend and I cooked or ordered an appropriate meal for the occasion.
    5 times we either made it wrong or didn't eat anything. 
    <br /> <em>Need I say more?</em>
    `
    aboutBox.setAttribute('id', 'about-box');

    mainSectionHome.append(homeHeader, homeContent,hoursBox, aboutBox);

    return mainSectionHome;
}


export default createHomepage;