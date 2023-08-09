const typingText = document.getElementById('typing-text');
const typingParagraph1 = document.getElementById('typing-paragraph1');

const titleText = 'SympOsiuM !!';
const paragraphText1 = 'Welcome to SCCSE';

let titleIndex = 0;
let paragraphIndex1 = 0;

function typeTitle() {
    typingText.innerHTML += titleText[titleIndex];
    titleIndex++;
    if (titleIndex === titleText.length) {
        clearInterval(titleInterval);
        paragraphInterval1 = setInterval(typeParagraph1, 50);
    }
}

function typeParagraph1() {
    typingParagraph1.innerHTML += paragraphText1[paragraphIndex1];
    paragraphIndex1++;
    if (paragraphIndex1 === paragraphText1.length) {
        clearInterval(paragraphInterval1);
        paragraphInterval2 = setInterval(typeParagraph2, 50);
    }
}

let paragraphInterval1;

const titleInterval = setInterval(typeTitle, 100);