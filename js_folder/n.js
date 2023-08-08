const typingText = document.getElementById('typing-text');
const titleText = 'Welcome to SCCSE';

let titleIndex = 0;

function typeTitle() {
    typingText.innerHTML += titleText[titleIndex];
    titleIndex++;
    if (titleIndex === titleText.length) {
        clearInterval(titleInterval);
        paragraphInterval1 = setInterval(typeParagraph1, 50);
    }
}
const titleInterval = setInterval(typeTitle, 100);