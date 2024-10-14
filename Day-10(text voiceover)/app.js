const textarea = document.querySelector("textarea");
const select = document.querySelector("select");
const btn = document.querySelector("button");
const gif = document.querySelector("img");

let synth = speechSynthesis;
let isSpeaking = true;
let voices = [];

const populateVocieList = ()=>{
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
        const option =  document.createElement("option");
        option.textContent = `${voices[i].name}  (${voices[i].lang})`;
        
        if (voices[i].default) {
            option.textContent += "- DEFAULT"; 
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        select.appendChild(option);
    }
};
populateVocieList();

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVocieList;
}


btn.addEventListener("click", (e)=>{
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
    const selectedOption = select.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {
        
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            gif.style.display = 'flex';
            setTimeout(() => {
                gif.style.display = 'none';
            }, 3000);
        }

    }

    synth.speak(utterThis);
});
