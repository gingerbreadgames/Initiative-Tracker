const numberInput = document.getElementById('Initiative');

// Function to add a new set of 
function startInput() {
    // Create a new div to hold the new set of inputs
    const newEntry = document.createElement('div');
    newEntry.className = 'initiative';

    // Add the new inputs to the div
    newEntry.innerHTML = `
            <label for="Initiative"> Initiative: </label>
            <input type:"number" id="Initiative" name="Initiative" maxlength="4" size="4" autofocus>
            <label for="Name"> Name: </label>
            <input type:"text"  id="Name" name="Name">
            <label for="HP"> HP: </label>
            <input type:"number" id="HP" name="HP" maxlength="3" size="3" autofocus>
            <label for="AC"> AC: </label>
            <input type:"number" id="AC" name="AC" maxlength="3" size="3" autofocus>
            <label for="isDead"> Dead? </label>
            <input type="checkbox" id="isDead" name="isDead">
    `;

    // Append the new div to the form
    document.getElementById('initiativeForm').appendChild(newEntry);
}
function addInput() {
    // Create a new div to hold the new set of inputs
    const newEntry = document.createElement('div');
    newEntry.className = 'initiative';

    // Add the new inputs to the div
    newEntry.innerHTML = `
            <label for="Initiative"> Initiative: </label>
            <input type:"number" id="Initiative" name="Initiative" maxlength="4" size="4" autofocus>
            <label for="Name"> Name: </label>
            <input type:"text"  id="Name" name="Name">
            <label for="HP"> HP: </label>
            <input type:"number" id="HP" name="HP" maxlength="3" size="3" autofocus>
            <label for="AC"> AC: </label>
            <input type:"number" id="AC" name="AC" maxlength="3" size="3" autofocus>
            <label for="isDead"> Dead? </label>
            <input type="checkbox" id="isDead" name="isDead">
    `;

    // Append the new div to the form
    document.getElementById('initiativeForm').appendChild(newEntry);
}

// Function to remove the last set of inputs
function removeInput() {
    const form = document.getElementById('initiativeForm');
    const entries = form.getElementsByClassName('initiative');

    // Only remove an entry if there are any left
    if (entries.length > 0) {
        form.removeChild(entries[entries.length - 1]);
    }
}

const numbers = [1, 5, 3, 4];
// Function to sort all elements by highest initiative #
function sortInitiative() {
    const form = document.getElementById('initiativeForm');
    const entries = Array.from(form.querySelectorAll('.initiative'));

    //Sort initiatives by descending order
    entries.sort((a, b) => {
        const initiativeA = parseInt(a.querySelector('input[name="Initiative"]')?.value) || 0;
        const initiativeB = parseInt(b.querySelector('input[name="Initiative"]')?.value) || 0;
        return initiativeB - initiativeA;

    });

    entries.forEach(entry => form.appendChild(entry));
}
    function markDead() {
        const checkbox = document.getElementById('isDead');

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                document.getElementById("Initiative").disabled = true;
                document.getElementById("Name").disabled = true;
                document.getElementById("HP").disabled = true;
                document.getElementById("AC").disabled = true;
            }
        });
}

    function whoseTurn() {
    
    }

    function roundCounter() {
    
    }

    function nextUp() {
    
    }

    function roll() {
    
    }
/* 
more ideas to work on 
-mark enemy as dead and remove their line
-highlight player up for combat
-round counter
-next button for player combat
-Conditions tracker
-roll option
*/