// generic answer checker
function checkAnswer(correctAnswer) {
    const input = document.getElementById('coordinate-input').value;

    if (input.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('coordinate-input').value = '';
        return true;
    }

    return false;
}