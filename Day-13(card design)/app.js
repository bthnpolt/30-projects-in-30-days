//DOM ELEMENTS
const cardNumber = document.querySelector('.card-number-box');
const cardNumberInput = document.querySelector('.card-number-input');
const cardOwner = document.querySelector('.card-holder-name');
const cardOwnerInput = document.querySelector('.card-holder-input');
const cardMonth = document.querySelector('.exp-month');
const cardMonthInput = document.querySelector('.month-input');
const cardYear = document.querySelector('.exp-year');
const cardYearInput = document.querySelector('.year-input');
const cardCvv = document.querySelector('.cvv-box');
const cardCvvInput = document.querySelector('.cvv-input');
const submitBtn = document.querySelector('.submit-btn');

// eventListeners
cardNumberInput.addEventListener("input", ()=>{
    cardNumber.innerText = cardNumberInput.value;
});

cardOwnerInput.addEventListener("input", ()=>{
    cardOwner.innerText = cardOwnerInput.value;
});

cardMonthInput.addEventListener("input",()=>{
    cardMonth.innerText = cardMonthInput.value + " /"
});

cardYearInput.addEventListener("input",()=>{
    cardYear.innerText = cardYearInput.value;
})

cardCvvInput.addEventListener('input',()=>{
    document.querySelector('.front').style.transform = "perspective(1000px) rotateY(-180deg)"

    document.querySelector('.back').style.transform = "perspective(1000px) rotateY(0deg)"
});

cardCvvInput.addEventListener('mouseleave',()=>{
    document.querySelector('.front').style.transform = "perspective(1000px) rotateY(0deg)"

    document.querySelector('.back').style.transform = "perspective(1000px) rotateY(180deg)"
});

cardCvvInput.addEventListener('input', ()=>{
    cardCvv.innerText = cardCvvInput.value;
});







