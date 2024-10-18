const btn = document.getElementById('short-btn');
const input = document.getElementById('original-link');
const urlList = document.getElementById('shortings');


class LocalStroge{
    static setItem(){
        localStorage.setItem('shortedUrl',JSON.stringify(urlListArr));
    }

    static getItem(){
        const storedList =  JSON.parse(localStorage.getItem('shortedUrl'));
        return storedList ? JSON.parse(localStorage.getItem('shortedUrl')) : [];
    }
}

class Copy{
    static copyUrl(i){
        const icon = document.querySelectorAll('.copy-icon')[i];
        const shortUrl = urlListArr[i];
        navigator.clipboard
        .writeText(shortUrl)
        .then(()=>{
            icon.style.color = "green";
            setTimeout(() => {
                icon.style.color = "#fff";
            }, 300);
        })
        .catch((err)=>{
            alert("Url Kopyalanamadı ", err);
        })
    }
}

class Delete{
    static deleteUrl(i){
        urlListArr.splice(i,1);
        LocalStroge.setItem();
        showUrl();
    }
}


// kısaltılan linkleri tutmak için oluşuturulan dizi
let urlListArr = [];
//url kısaltma fonksiyonu
const shortUrl = async (url)=>{
    try {
        const response = await fetch('https://api.tinyurl.com/create',{
            method: 'POST',
            headers:{
                'Authorization' : 'Bearer Yv2m1zttGNCUllNuUtJYWFFFkBnH1u700MI8X6uHRULUYlWxnepwDP6SVkUb',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                url: url,
                domain: "tiny.one"
            })
        });
        if (! response.ok) {
            alert(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        urlListArr.push(data.data.tiny_url);
        LocalStroge.setItem();
        showUrl()
    } catch (error) {
        console.log(error);
    }
    
}
//url göster
const showUrl = () =>{
    urlList.innerHTML = "";
    urlListArr = LocalStroge.getItem(); 
    for (let i = 0; i < urlListArr.length; i++) {
         urlList.innerHTML += `<div class="short-url">
                 <p class="url-text">
                     <a target="_blank" href="${urlListArr[i]}">${urlListArr[i]}</a>
                 </p>
                 <button onclick="Copy.copyUrl(${i})" class="copy-icon"><i class="fas fa-copy"></i></button>

                 <button onclick="Delete.deleteUrl(${i})" class="trash-icon"><i class="fas fa-trash"></i></button>
             </div>`
         
     }
     urlList.style.opacity = 1;
}

btn.addEventListener('click', ()=>{
    if (input.value != "") {
        const url = input.value;
        shortUrl(url);
        input.value = "";
    }else{
        alert('Lütfen url giriniz!');
    }
    
});

document.addEventListener("DOMContentLoaded", ()=>{
    showUrl();
});



