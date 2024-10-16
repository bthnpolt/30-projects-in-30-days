const images = document.querySelectorAll(".gallery-image");
const overlay = document.getElementById("overlay");
const expandedImage = document.getElementById("expandedImage");
const closeButton = document.getElementById("closeButton");
 

images.forEach((image)=>{
    image.addEventListener("click", ()=>{
        expandedImage.src = image.src;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            expandedImage.style.transform = "translate(-50%, -50%) scale(1)";
        }, 50);
    });
});

closeButton.addEventListener('click', ()=>{
    expandedImage.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
});