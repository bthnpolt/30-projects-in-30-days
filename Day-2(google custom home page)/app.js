let url =  'https://www.google.com/search?q='
const input =  document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


const search = () =>{
    if (input.value !== "") {
        let searchUrl = url + input.value;     
        window.open(searchUrl, "_blank");
        input.value = ""; 
    }else{
        alert("Arama yapılacak anahtar kelimeyi giriniz!");
    }
    
}


    
        searchBtn.addEventListener('click', search);
        input.addEventListener('keypress', (e) =>{
            if(e.key === 'Enter'){
                search();
            }
        });
   



