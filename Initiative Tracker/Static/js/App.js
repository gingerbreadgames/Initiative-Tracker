const numberInput = document.getElementById('Initiative');
let counter = 0; // counter to make unique Id's for inputs
let roundNumber = 1; // when combat begins it begins at round 1
let inCombat = false; // website starts with combat tracking off
let myTurn = false; 
var rolledNumber;
let turnIndex = 1;


// on button click this will add another line of inputs 
function addInput() {
    // Create a new div to hold the new set of inputs
    const newEntry = document.createElement('div');
    newEntry.className = 'initiative';

    counter++;
    newEntry.className = 'initiative';
    newEntry.id = `entry-${counter}`;

    // Add the new inputs to the div
    newEntry.innerHTML = `
            <button type="button" onclick="assignValue(${counter})">Roll</button>
            <label for="Initiative-${counter}"> Initiative: </label>
            <input type:"number" id="Initiative-${counter}" name="Initiative" maxlength="4" size="4" autofocus>
            <label for="Name-${counter}"> Name: </label>
            <input type:"text"  id="Name-${counter}" name="Name">
            <label for="HP-${counter}"> HP: </label>
            <input type:"number" id="HP-${counter}" name="HP" maxlength="4" size="4" autofocus>
            <label for="AC-${counter}"> AC: </label>
            <input type:"number" id="AC-${counter}" name="AC" maxlength="4" size="4" autofocus>
            <label for="isDead"> Dead? </label>
            <input type="checkbox" id="isDead" name="isDead">
            <button type="button" color=red onclick="removeInput(this)">X</button>
    `;

  // event listener to the Dead checkbox
  const checkbox = newEntry.querySelector('input[name="isDead"]');
  checkbox.addEventListener('change', function () {
      markDead(this);
  });
    
    // Append the new div to the form
    document.getElementById('initiativeForm').appendChild(newEntry);
}

// start the website with the input areas ready to go
function startInput() {
    addInput();
    addInput();
    addInput();
}

// Function to remove set of inputs
function removeInput(button) {
    const entry = button.closest('.initiative'); // Find the closest parent with the class 'initiative'
    if (entry) {
        entry.remove(); // Remove the specific entry
    }
}

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

// on check mark it tones down opacity and removes input functionality except the checkbox that denotes if creature is dead
function markDead(checkbox) {
    const entry = checkbox.closest('.initiative');
    if (checkbox.checked) {
        // Disable all inputs within the entry, except for the checkbox itself
        entry.querySelectorAll('input').forEach(input => {
            if (input !== checkbox) input.disabled = true;
        });

        // Lower the opacity for the entry
        entry.style.opacity = '0.5';
    } else {
        // Re-enable all inputs within the entry
        entry.querySelectorAll('input').forEach(input => {
            input.disabled = false;
        });

        // Reset opacity for the entry
        entry.style.opacity = '1';
    }
}

function startCombat() {
    inCombat = true;
    whoseTurn();
}

function endCombat() {
    inCombat = false;
    // Remove the highlight from all entries by removing the "current-turn" class
    const entries = document.querySelectorAll('.initiative');
    entries.forEach(entry => entry.classList.remove('current-turn'));
    
}

function whoseTurn() {
    const entries = Array.from(document.querySelectorAll('.initiative'));

    // Remove the 'current-turn' highlight from all
    entries.forEach(entry => entry.classList.remove('current-turn'));

    // Highlight the current turn
    if (entries[turnIndex]) {
        entries[turnIndex].classList.add('current-turn');
    }
    

}

function nextTurn() {
    if (!inCombat) return; // Stop if combat is not active

    const entries = Array.from(document.querySelectorAll('.initiative'));

    // Move to the next turn, wrapping around if needed
    do {
        turnIndex = (turnIndex + 1) % entries.length;
        if (turnIndex === 0) {
            turnIndex = turnIndex + 1; 
        }
    } while (entries[turnIndex].querySelector('input[name="isDead"]').checked); // Skip dead characters

    whoseTurn(); // Update UI to show current turn
}


function lastTurn() {
    if (!inCombat) return; // Stop if combat is not active

    const entries = Array.from(document.querySelectorAll('.initiative'));

    // Move to the previous turn, wrapping around if needed
    do {
        turnIndex = (turnIndex - 1 + entries.length) % entries.length;
        if (turnIndex === 0) {
            turnIndex = turnIndex - 1 + entries.length; 
        }
    } while (entries[turnIndex].querySelector('input[name="isDead"]').checked); // Skip dead characters

    whoseTurn(); // Update UI to show current turn

}


// creates a random number 1 through 20 for initiative laziness 
function roll() {
    rolledNumber = Math.floor(Math.random() * 20) + 1;
    return rolledNumber;

}

// assigns the random roll int into the initiative input
function assignValue(entryId) {
    const rolledNumber = roll();
    const inputField = document.getElementById(`Initiative-${entryId}`);
    if (inputField) {
        inputField.value = rolledNumber;
    }
}

/* 
more ideas to work on 
-Conditions tracker that slightly colors the person of the affect
*/