let yazi = 0;
let tura = 0;

const coin = document.querySelector('#coin');
const flipButton = document.querySelector('#flip-button');
const resetButton = document.querySelector('#reset-button');

flipButton.addEventListener('click', () =>{
    //yazi = 1 tura = 0
    let i = Math.floor(Math.random() *2);
    coin.style.animation = 'none';
    if(i){
        setTimeout(() => { 
            coin.style.animation = 'spin-tura 3s forwards';
        }, 100);
        tura++;
    }else{
        setTimeout(() => {
            coin.style.animation = 'spin-yazi 3s forwards'
        }, 100);
        yazi++;
    }
    setTimeout(updateStats ,3000);
    disabledButton();
});

const updateStats = () =>{
    document.querySelector('.tura-count').innerText = `Tura: ${tura}`;
    document.querySelector('.yazi-count').innerText = `Yazı: ${yazi}`;
}

const disabledButton = () =>{
    flipButton.disabled = true;
    setTimeout(() => {
        flipButton.disabled = false;
    }, 3000);
}

const reset = () =>{
    coin.style.animation = 'none';
    tura = 0;
    yazi = 0;
    updateStats();
}

resetButton.addEventListener('click', reset);