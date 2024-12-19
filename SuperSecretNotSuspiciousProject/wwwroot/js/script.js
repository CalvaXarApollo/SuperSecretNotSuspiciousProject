// Function to clear input fields
function clearInputs() {
    document.getElementById('coordinate-input').value = '';
    document.getElementById('secret-letter-input').value = '';
}

// Generic answer checker
function checkAnswer(correctAnswer, secretLetter) {
    const answerInput = document.getElementById('coordinate-input')?.value;
    const secretLetterInput = document.getElementById('secret-letter-input')?.value;

    if (answerInput.toLowerCase() === correctAnswer.toLowerCase() &&
        secretLetterInput.toLowerCase() === secretLetter.toLowerCase()) {

        clearInputs();
        return "both";
    }
    
    if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {

        clearInputs();
        return "answer";
    }
    
    if (secretLetterInput.toLowerCase() === secretLetter.toLowerCase()) {

        clearInputs();
        return "secret";
    }

    return "neither";
}

const storyLines = [
    "Through a mishap of thy own making, a great rift hath torn the fabric of reality, propelling thee into ancient times.",
    "The sages of old, foreseeing such calamity, scattered the elements to repair the rift across the land, each guarded by cunning puzzles and perilous trials.",
    "Thou art tasked to restore balance and mend what is broken.",
    "Beware, for the path is treacherous, testing thy wits and courage at every turn.",
    "Seek the hidden elements, brave travellers, and seal the rift—for the fate of time itself rests upon thee!",
];

const typeSpeed = 50; // Typing speed in ms per character

function typeWriterEffect(element, text, callback) {
    let charIndex = 0;
    const interval = setInterval(() => {
        element.textContent += text[charIndex];
        charIndex++;
        if (charIndex === text.length) {
            clearInterval(interval);
            callback();
        }
    }, typeSpeed);
}

function displayStory() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="story-screen">
            <div id="story-content" class="story-text"></div>
        </div>
    `;
    
    const storyContent = document.getElementById('story-content');
    let currentLine = 0;

    function typeNextLine() {
        if (currentLine < storyLines.length) {
            typeWriterEffect(storyContent, storyLines[currentLine], () => {
                currentLine++;
                storyContent.textContent += "\n\n"; // Add spacing between lines
                storyContent.scrollTop = storyContent.scrollHeight; // Auto-scroll to bottom
                setTimeout(typeNextLine, 1000); // Pause before adding the next line
            });
        } else {
            setTimeout(() => {
                const continueButton = document.createElement('button');
                continueButton.textContent = "Continue Thy Quest";
                continueButton.className = "start-button";
                continueButton.addEventListener('click', () => {
                    window.location.href = '/Quests'; // Redirect to first puzzle
                });
                storyContent.parentElement.appendChild(continueButton);
            }, 1000);
        }
    }

    typeNextLine();
}

// Function to redirect to the congratulations page
function congratulations() {
    window.location.href = '/Congratulations';
}


let times = ['3:34', '6:57', '12:04', '9:40']; // Time values for glitch
let currentTime = 0;

// Wait until the DOM is fully loaded before starting the interval
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    // Update the clock every second to simulate glitchy behavior
    setInterval(() => {
        // Update the clock text
        const clockElement = document.getElementById('clock');

        // Ensure clockElement exists before updating
        if (clockElement) {
            clockElement.innerText = times[currentTime];
            currentTime = (currentTime + 1) % times.length; // Loop through the time array
        } else {
            console.error('Clock element not found!');
        }
    }, 500);
});