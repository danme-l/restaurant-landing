const footer = document.createElement('footer');
const footerNameIcon = document.createElement('h4');
footerNameIcon.innerHTML = "Dan Meleras <a href='https://github.com/danme-l'><i class='fa-brands fa-github'></i></a>";
const footerContent = document.createElement('p');
footerContent.innerHTML = "As part of the Odin Project Web Dev Curriculum";
footer.appendChild(footerNameIcon);
footer.appendChild(footerContent);

export default footer;