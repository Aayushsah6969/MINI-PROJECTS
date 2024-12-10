const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById('result');
const btn = document.getElementById('search');
const audio = document.getElementById('sound');
const inputWord = document.getElementById('inputword');

audio.addEventListener("click", () => {
    if (currentAudioUrl) {
        playAudio(currentAudioUrl);
    }
});

inputWord.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

btn.addEventListener("click", performSearch);

let currentAudioUrl;

async function performSearch() {
    let inputword = inputWord.value;
    let response = await fetch(`${url}${inputword}`);
   
    let data = await response.json();

    console.log(data);
     
    let goo = document.getElementById('definition');
    let final = data[0].meanings[0].definitions[0].definition;
    goo.innerHTML = final;

    const synonymsArray = data?.[0]?.meanings?.[0]?.synonyms || [];
    let synonymsHTML = '';

    synonymsArray.forEach(synonym => {
        synonymsHTML += `<div>${synonym},</div>`;
    });

    let saw = document.getElementById('synonyms');
    saw.innerHTML = synonymsHTML;

    const antonymsArray = data?.[0]?.meanings?.[0]?.antonyms || [];
    let antonymsHTML = '';

    antonymsArray.forEach(antonym => {
        antonymsHTML += `<div>${antonym},</div>`;
    });

    let saws = document.getElementById('antonyms');
    saws.innerHTML = antonymsHTML;

    currentAudioUrl = data[0].phonetics[0].audio;
}

function playAudio(audioUrl) {
    var audioElement = new Audio(audioUrl);
    audioElement.play();
}
