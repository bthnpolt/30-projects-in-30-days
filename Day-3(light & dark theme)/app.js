const html =  document.querySelector('html');
const themeBtn = document.querySelector('button');


const themeChange = (e) =>{
    html.classList.toggle('dark-theme');
}

themeBtn.addEventListener('click', themeChange);