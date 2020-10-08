//Setup for the "flipBtn" button to call an anonymous function when clicked
document.getElementById('flipBtn').addEventListener('click', function () {
    
    let inputWord = document.getElementById('reverseThis').value;
    let lowerWord = inputWord.toLowerCase();
    let truncInput = lowerWord.split(' ').join('');
    let flippedWord = ""
    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
        flippedWord += truncInput.charAt(loop);
    }
    if (truncInput == flippedWord) {
        swal('Good Job', `${inputWord} is a palindrome!`, 'success',)
    }
    else {
        swal('Sorry', `${inputWord} is not a palindrome!`, 'error')
    }


    document.getElementById('flippedText').innerHTML = flippedWord



})
document.getElementById('reverseThis').addEventListener('keypress', function (evt) {
    var char = evt.which;
    if (char >= 97 && char <= 122 || char >= 65 && char <= 90 || char == 32) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});