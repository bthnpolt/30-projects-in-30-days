const loader = document.getElementById('loader');
const button = document.getElementById('myButton');
const img = document.querySelector('img')

const clickButton = () =>{
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
        button.style.display = 'none';
        img.style.display = 'flex';
    }, 1000);
    
}

button.addEventListener('click',clickButton);