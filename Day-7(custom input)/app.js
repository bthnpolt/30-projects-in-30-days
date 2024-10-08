const input = document.querySelector('.input__field');
const icon = document.querySelector('.input__icon');

icon.addEventListener('click',()=>{
    if (input.getAttribute('type') === 'password') {
        icon.setAttribute('src', 'icons8-eye-24.png');
        input.setAttribute('type', 'text');
    }else{
        icon.setAttribute('src', 'icons8-closed-eye-24.png');
        input.setAttribute('type', 'password');
    }
});