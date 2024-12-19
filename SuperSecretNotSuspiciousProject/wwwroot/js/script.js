// generic answer checker
function checkAnswer(correctAnswer) {
    const input = document.getElementById('coordinate-input').value;

    if (input.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('coordinate-input').value = '';
        return true;
    }

    return false;
}


const storyLines = [
    "Through a mishap of thy own making, a great rift hath torn the fabric of reality, propelling thee into ancient times.",
    "The sages of old, foreseeing such calamity, scattered the elements to repair the rift across the land, each guarded by cunning puzzles and perilous trials.",
    "Thou art tasked to restore balance and mend what is broken.",
    "Beware, for the path is treacherous, testing thy wits and courage at every turn.",
    "Seek the hidden elements, brave travellers, and seal the rift—for the fate of time itself rests upon thee!",
];

const typeSpeed = 50; // Typing speed in ms per character

// Function for typewriter effect
function displayStory() {
    // Clear home screen
    document.querySelector('.container').innerHTML = `
        <div class="story-screen">
            <div id="story-content" class="story-text"></div>
        </div>
    `;
    
    const storyContent = document.getElementById('story-content');
    let currentLine = 0;

    function typeLine() {
        if (currentLine < storyLines.length) {
            const line = storyLines[currentLine];
            let charIndex = 0;

            const interval = setInterval(() => {
                storyContent.textContent += line[charIndex];
                charIndex++;

                if (charIndex === line.length) {
                    clearInterval(interval);
                    currentLine++;

                    // Add spacing between lines and scroll to the bottom of the story
                    setTimeout(() => {
                        storyContent.textContent += "\n\n";
                        storyContent.scrollTop = storyContent.scrollHeight; // Auto-scroll to bottom
                        typeLine();
                    }, 1000); // Pause before adding the next line
                }
            }, typeSpeed);
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

    typeLine();
}


function congratulations() {
    window.location.href = '/Congratulations';
}