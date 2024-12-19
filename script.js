const storyLines = [
    "Through a mishap of thy own making, a great rift hath torn the fabric of reality, propelling thee into ancient times.",
    "The sages of old, foreseeing such calamity, scattered the elements to repair the rift across the land, each guarded by cunning puzzles and perilous trials.",
    "Thou art tasked to restore balance and mend what is broken.",
    "Beware, for the path is treacherous, testing thy wits and courage at every turn.",
    "Seek the hidden elements, brave travellers, and seal the rift—for the fate of time itself rests upon thee!",
];

const typeSpeed = 50; // Typing speed in ms per character


document.getElementById('start-adventure').addEventListener('click', () => {
    // Clear home screen
    document.querySelector('.container').innerHTML = `
        <div class="story-screen">
            <div id="story-content" class="story-text"></div>
        </div>
    `;

    // Start storyline
    displayStory();
});

// Function for typewriter effect
function displayStory() {
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
                    window.location.href = 'puzzle1.html'; // Redirect to first puzzle
                });
                storyContent.parentElement.appendChild(continueButton);
            }, 1000);
        }
    }

    typeLine();
}

// coordinates puzzle (1)
function checkCoordinates() {
    const input = document.getElementById('coordinate-input').value;
    const inputBox = document.getElementById('coordinate-input');

    if (input.toLowerCase() === '41.84201, -89.485937') {
        window.location.href = 'Puzzle2.html';  // Correct answer
    } else {
        alert('Try again!');
        inputBox.classList.add('shake'); //not working 
        setTimeout(() => {
            inputBox.classList.remove('shake');
        }, 500);
    }
}

// time glitch puzzle (2) not working ??
let times = ['3:34', '6:57', '12:04', '9:40']; // Time values for glitch
let currentTime = 0;

// Wait until the DOM is fully loaded before starting the interval
document.addEventListener('DOMContentLoaded', function () {
    // Update the clock every second to simulate glitchy behavior
    setInterval(() => {
        // Update the clock text
        const clockElement = document.getElementById('clock');
        
        // Ensure clockElement exists before updating
        if (clockElement) {
            clockElement.innerText = times[currentTime];
            currentTime = (currentTime + 1) % times.length; // Loop through the time array
        }
    }, 1000); // Every 1 second update the clock (1000ms)
});

// Check the time input for the time glitch puzzle
function checkTime() {
    const input = document.getElementById('time-input').value.trim(); // Remove extra spaces
    if (input === '12:00') {  // Correct answer
        window.location.href = 'Puzzle3.html';  // Move to anachron puzzle 
    } else {
        alert('The time is not right!');  // Incorrect answer
    }
}

// Fix the anachrons puzzle (3)
function checkTimeline() {
    const input = document.getElementById('timeline-input').value;
    if (input === 'romanswordmedievalknightfuturisticgadget') {  // Correct order
        window.location.href = 'Puzzle4.html';  // Proceed to Puzzle4 page
    } else {
        alert('The timeline is not correct!');  // Incorrect answer
    }
}

// Break the loop puzzle (4)
function checkLoopPattern() {
    const input = document.getElementById('loop-input').value;
    if (input.toLowerCase() === 'code') {  // Correct input
        window.location.href = 'Puzzle5.html';  // Proceed to rift puzzle
    } else {
        alert('The key to the loop is hidden in plain sight!');  // Incorrect answer
    }
}

// The rift puzzle (Final) (5)
function checkRiftCore() {
    const input = document.getElementById('rift-input').value;
    if (input.toLowerCase() === 'fragment_lockseal_rift') {  // Correct answer
        alert('Congratulations! You have sealed the Rift and saved spacetime!');
        window.location.href = 'congratulations.html';  // Redirect to the final page
    } else {
        alert('The Rift is still open! Try again.');  // Incorrect answer
    }
}

// Start Your Mission Button (Initial mission start)
const missionButton = document.getElementById('start-mission');
if (missionButton) {
    missionButton.addEventListener('click', startMission);
}

function startMission() {
    alert("Your mission has started!");
    window.location.href = 'puzzle1.html';  // Redirect to the first puzzle
}
