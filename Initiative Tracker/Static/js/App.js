// Function to add a new set of inputs
function addInput() {
    // Create a new div to hold the new set of inputs
    const newEntry = document.createElement('div');
    newEntry.className = 'entry';

    // Add the new inputs to the div
    newEntry.innerHTML = `
        <label for="Initiative">Initiative: </label>
        <input type="number" id="Initiative" name="Initiative" maxlength="4" size="4" autofocus>
        <label for="Name">Name: </label>
        <input type="text" id="Name" name="Name">
        <label for="HP"> HP: </label>
        <input type="number" id="HP" name="HP" maxlength="3" size="3" autofocus>
        <label for="AC"> AC: </label>
        <input type="number" id="AC" name="AC" maxlength="3" size="3" autofocus>
    `;

    // Append the new div to the form
    document.getElementById('initiativeForm').appendChild(newEntry);
}

// Function to remove the last set of inputs
function removeInput() {
    const form = document.getElementById('initiativeForm');
    const entries = form.getElementsByClassName('entry');

    // Only remove an entry if there are any left
    if (entries.length > 0) {
        form.removeChild(entries[entries.length - 1]);
    }
}
