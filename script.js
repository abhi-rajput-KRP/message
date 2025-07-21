// Get references to the HTML elements
        const textInput = document.getElementById('textInput');
        const fetchButton = document.getElementById('fetchButton');
        const displayTextDiv = document.getElementById('displayText');

        // Add an event listener to the button
        fetchButton.addEventListener('click', () => {
            // Get the value from the input box
            const enteredText = textInput.value;
            // Check if the input is not empty
            if (enteredText.trim() !== '') {
                displayTextDiv.textContent = `Hey there ${enteredText} ! Just wanted to send a little reminder that you're doing great. Take a moment, smile, and remember how awesome you are. Keep that chin up and let your happiness shine through! 😊`;
            }
            else{
                displayTextDiv.textContent = "You have no entered anything";
            }
        });