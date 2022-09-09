function createContactPage() {
    const mainSectionContact = document.createElement('main');

    const contactHead = document.createElement('h1');
    contactHead.innerHTML = 'Important Contacts';

    const rodgers = document.createElement('div');
    rodgers.classList.add('contact-box');
    rodgers.setAttribute('id', 'rodgers-container');
    rodgers.innerHTML = `
    <div class='contact-content'>
        <h3> Aaron Rodgers </h3>
        <h5> Head Server </h5>
        <p> He came to preach about chem trails and throw darts, and he's all out of chem trails </p>
    </div>
    `
    const rodgersPic = document.createElement('div');
    rodgersPic.setAttribute('id', 'rodgers-pic');
    rodgersPic.classList.add('contact-photo')
    rodgers.append(rodgersPic);

    const favre = document.createElement('div');
    favre.classList.add('contact-box');
    favre.setAttribute('id', 'favre-container');
    favre.innerHTML = `
    <div class='contact-content'>
        <h3> Brett Favre </h3>
        <h5> Former Head Server </h5>
        <p> Catch him sending unsolicited pictures of his dick to reporters </p>
    </div>
    `;
    const favrePic = document.createElement('div');
    favrePic.setAttribute('id', 'favre-pic');
    favrePic.classList.add('contact-photo');
    favre.append(favrePic);


    const lafleur = document.createElement('div');
    lafleur.classList.add('contact-box');
    lafleur.setAttribute('id', 'lafleur-container');
    lafleur.innerHTML = `
    <div class='contact-content'>
        <h3> Matt Lafleur </h3>
        <h5> Head Chef </h5>
        <p> Only Chef to serve 13 straight michelin star masterpieces in each of his first three years </p>
    </div>
    `;
    const lafleurPic = document.createElement('div');
    lafleurPic.setAttribute('id', 'lafleur-pic');
    lafleurPic.classList.add('contact-photo');
    lafleur.append(lafleurPic);

    const lombardi = document.createElement('div');
    lombardi.classList.add('contact-box');
    lombardi.setAttribute('id', 'lombardi-container');
    lombardi.innerHTML = `
    <div class='contact-content'>
        <h3> Vince Lombardi </h3>
        <h5> Founding Chef </h5>
        <p> So widely respected and succesful that they named the chef's trophy after him </p>
    </div>
    `
    const lombardiPic = document.createElement('div');
    lombardiPic.setAttribute('id', 'lombardi-pic');
    lombardiPic.classList.add('contact-photo');
    lombardi.append(lombardiPic);

    mainSectionContact.append(contactHead, rodgers, favre, lafleur, lombardi);

    return mainSectionContact;
}

export default createContactPage;