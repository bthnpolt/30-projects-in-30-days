// DOM Elements
const html = document.querySelector('html');
const themeBtn = document.querySelector('.theme-btn');
const searchInput = document.getElementById('searchInput');
const getBtn = document.querySelector('.get-btn');
const detailsContainer = document.querySelector('.details-container');

// Url
let url = 'https://api.github.com/users/';

// date limit
const stringSplit = (str) =>{
    let newStr= "" ;
    for (let i = 0; i < 10; i++) {
       newStr += str[i].toString();
    }
    return newStr;
}

//light-dark theme
const themeChange = () => {
    html.classList.toggle('dark-theme');
}

//when themeBtn click
themeBtn.addEventListener('click', themeChange);

//api
const getGithubProfile = async () => {
    if (searchInput.value !== "") {
        let inputValue = searchInput.value;
        let searchUrl = `${url}${inputValue}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        if (response.ok) {
            detailsContainer.style.display = 'flex';
        detailsContainer.innerHTML = ` 
             <div class="details-container-1">
                <div class="details-container-1-img">
                    <img src="${data.avatar_url}" alt="avatar">
                </div>
                <div class="details-container-1-text">
                    <div class="name">${data.name || data.login}</div>
                    <div class="username">
                        <a href="${data.html_url}" target="_blank">${data.login}</a>
                    </div>
                </div>
                <div class="details-container-1-bio">
                    <div class="bio">${data.bio || "Bio bilgisi yok!"}</div>
                </div>
            </div>

            <div class="details-container-2">
                <div class="details-container-2-row">
                    <span class="details-container-2-stats-name">Hesap Oluşturma Tarihi:</span>
                    <span id="created-at"  class="details-container-2-stats-value">${stringSplit(data.created_at)}</span>
                </div>

                <div class="details-container-2-row">
                    <span class="details-container-2-stats-name">Son Güncelleme Tarihi:</span>
                    <span id="update-at"  class="details-container-2-stats-value">${stringSplit(data.updated_at)}</span>
                </div>

                <div class="details-container-2-row">
                    <span class="details-container-2-stats-name">Public Repo Sayısı: </span>
                    <span class="details-container-2-stats-value">${data.public_repos}</span>
                </div>

                <div class="details-container-2-row">
                    <span class="details-container-2-stats-name">Takipçi Sayısı:</span>
                    <span class="details-container-2-stats-value">${data.followers}</span>
                </div>

                <div class="details-container-2-row">
                    <span class="details-container-2-stats-name">Takip Edilen Sayısı:</span>
                    <span class="details-container-2-stats-value">${data.following}</span>
                </div>


            </div>

             <div class="details-container-3">
                <div class="details-container-3-media">
                    <p>
                        <span class="details-container-3-media-value">${data.location || "Konum bilgisi yok!"}</span>
                    </p>
    
                    <p>
                        <span class="details-container-3-media-value">${data.company || "Şirket bilgisi yok!"}</span>
                    </p>
    
                    <p>
                        <span class="details-container-3-media-value">${data.twitter_username || "Twitter bilgisi yok!"}</span>
                    </p>
    
                    <p>
                        <span class="details-container-3-media-value">${data.email ||"Mail bilgisi yok!"}</span>
                    </p>
                </div>
            </div>
        `;
        searchInput.value = "";
        }else{
            alert(data.message);
        }
        


    } else {
        alert('Lütfen Kullanıcı Adı Giriniz!');
    }

}

