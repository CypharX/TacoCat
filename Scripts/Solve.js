//Setup for the "flipBtn" button to call an anonymous function when clicked.
document.getElementById('flipBtn').addEventListener('click', function () {
    //Creates new variable "inputWord" and sets it equal to the input from "reverseThis".
    let inputWord = document.getElementById('reverseThis').value;
    //Takes the value from "inputWord" and shifts it to lowercase and removes the spaces
    //then sets the new value to "truncInput.
    let truncInput = inputWord.toLowerCase().split(' ').join('');
    //Creates "flippedWord" variable to be used as the output of the loop.
    let flippedWord = "";
    //Starts a for loop to run an amounts of times equal to the input word.
    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
        //Reverses "truncInput" by taking the character in it and the current value
        //of loop and adding it to what is already in "flippedWord".
        flippedWord += truncInput.charAt(loop);
    }
    //If else functions that check if "flippedWord" and "truncInput" are equal 
    //and triggers a corresponding sweet alert that tell the user if they
    //entered a palindrome or not. The sweet alerts use template literals to
    //display the original input.
    if (truncInput == flippedWord) {
        swal('Good Job', `${inputWord} is a palindrome!`, 'success',)
    }
    else {
        swal('Sorry', `${inputWord} is not a palindrome!`, 'error')
    }
    //Function that sets the innerHTML of the "flippedText" id to our new "flippedWord"
    //variable. This will display they new word to the user.
    document.getElementById('flippedText').innerHTML = flippedWord
})

//Function that listens for a keypress in the "reverseThis" input box and then
//ignores all non letter or space characters.
document.getElementById('reverseThis').addEventListener('keypress', function (evt) {
    //Creates the "char" variable and sets it equal to the character code of the 
    //pressed input
    let char = evt.which;
    //Uses the value of "char" to determine the given character using its Ascii
    // code and returning true if it's a character we want and false if it's any
    //other character.
    if (char >= 97 && char <= 122 || char >= 65 && char <= 90 || char == 32) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});