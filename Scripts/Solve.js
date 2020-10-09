//Setup for the "flipBtn" button to call an anonymous function when clicked.
document.getElementById('flipBtn').addEventListener('click', function () {
    //Creates new variable "inputWord" and sets it equal to the input from "reverseThis".
    let inputWord = document.getElementById('reverseThis').value;
    //If function to force the user to enter an input.
    if (inputWord == "") {
        Swal.fire('Error', 'You must enter an input', 'warning')
    } else {
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
            Swal.fire({
                title: `<span style='color: #F7F0F0' class='h2'>Great Job!<span>`,
                background: '#1E212B',
                icon: 'success',
                html: `<span style='color: #F7F0F0' class='h4'>${inputWord} is a palindrome! <span>`,
                backdrop: '#048A81',
                confirmButtonColor: '#048A81',
                iconColor: '#06D6A0',
            })
        }
        else {
            Swal.fire({
                title: `<span style='color: #F7F0F0' class='h2'>Sorry<span>`,
                background: '#1E212B',
                icon: 'error',
                html: `<span style='color: #F7F0F0' class='h4'>${inputWord} is a not palindrome! <span>`,
                backdrop: '#BF5C5C',
                confirmButtonColor: '#F27474',

            })
        }
        //Function that sets the innerHTML of the "flippedText" id to our new "flippedWord"
        //variable. This will display they new word to the user.
        document.getElementById('flippedText').innerHTML = flippedWord
    }
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