const url = 'https://api.github.com/users/';

const searchGitHub = async () =>{
    const userName =  document.getElementById('searchInput').value;

    const response =  await fetch(`${url}${userName}`);
    const detailsContainer = document.querySelector('.details');
    const data = await response.json();
    
    if (response.ok) {
        detailsContainer.style.display = 'flex';
        document.getElementById('result').innerHTML = `
                <div class='profile'>
                    <div class='profile-image'>
                        <img src="${data.avatar_url}" alt="avatar">
                    
                    </div>
                    <div class='profile-details'>
                        <h2 class='name'>${data.name || data.login}</h2>
                        <p class='username'>@${data.login}</p>
                        <p class='bio>${data.bio || "Hesapta biografi bilgisi yok"}</p>
                        
                        <div class='stats'>
                            <div>
                                <div class='stats-name'>Public Repo Sayısı</div>
                                <div class='stats-value'>${data.public_repos}</div>
                            </div>

                            <div>
                                <div class='stats-name'>Takipçi Sayısı</div>
                                <div class='stats-value'>${data.followers}</div>
                            </div>

                            <div>
                                <div class='stats-name'>Takip Edilen Sayısı</div>
                                <div class='stats-value'>${data.following}</div>
                            </div>
                        </div>
                        
                            <div class='media'>
                        <p>
                            <span class='media-value'>
                                ${data.location || "Konum bilgisi yok!"}
                            </span>
                        </p>

                        <p>
                            <span class='media-value'>
                                ${data.blog || "Blog bilgisi yok!"}
                            </span>
                        </p>

                        <p>
                            <span class='media-value'>
                                ${data.email || "Mail bilgisi yok!"}
                            </span>
                        </p>

                        <p>
                            <span class='media-value'>
                                ${data.twitter_username || "Twitter bilgisi yok!"}
                            </span>
                        </p>
                    </div>
                    </div>

                   
                </div>
        `
        userName = "";
    }else{
        alert(data.message); 
    }
}