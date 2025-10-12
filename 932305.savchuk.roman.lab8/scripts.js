var entriesAmount = 1;
function addElement() {
    const table = document.getElementById('table');
    const entry = document.createElement('div');
    entry.className = "table_entry";
    entry.innerHTML = `
        <input class="first_input" type="text">
        <input class="second_input" type="text">
        <button class="up_button" onclick="goUp(this)">↑</button>
        <button class="down_button" onclick="goDown(this)">↓</button>
        <button class="delete_button" onclick="deleteEntry(this)">x</button>
    `
    entry.style.order = entriesAmount;
    entriesAmount += 1;
    table.appendChild(entry);
}
function saveElements() {
    const entries = document.querySelectorAll('.table_entry');
    const entriesValues = [];
    let counter = 0;
    entries.forEach(entry => {
        counter++;
        const order = parseInt(getComputedStyle(entry).order);
        const firstValue = entry.querySelector('.first_input');
        const secondValue = entry.querySelector('.second_input');
        entriesValues.push({first:firstValue.value, second:secondValue.value, order:order});
    });
    entriesValues.sort((a, b) => a.order - b.order);
    let entriesString = "{";
    for (let i = 0; i < counter; i++) {
        entriesString += '"';
        entriesString += entriesValues[i].first;
        entriesString += '":"';
        entriesString += entriesValues[i].second;
        entriesString += '"';
        if (i != counter - 1) {
            entriesString += ",";
        }
    }
    entriesString += "}";
    const textDiv = document.getElementById('text');
    textDiv.textContent = entriesString;
}
function deleteEntry(button) {
    entriesAmount -= 1;
    const mainEntry = button.closest('.table_entry');
    const entries = document.querySelectorAll('.table_entry');
    const mainEntryOrder = parseInt(getComputedStyle(mainEntry).order);
    entries.forEach(entry => {
        let entryOrder = parseInt(getComputedStyle(entry).order);
        if (entryOrder > mainEntryOrder) {
            entry.style.order = entryOrder - 1;
        } 
    });
    mainEntry.remove();
}
function goUp(button) {
    const mainEntry = button.closest('.table_entry');
    const mainEntryOrder = parseInt(getComputedStyle(mainEntry).order);
    if (mainEntryOrder != 0) {
        const upperEntry = (function() {
            const entries = document.querySelectorAll('.table_entry');
            for (const entry of entries) {
                const entryOrder = parseInt(getComputedStyle(entry).order);
                if (entryOrder == mainEntryOrder - 1) {
                    return entry
                }
            }
        }) ();
        upperEntry.style.order = mainEntryOrder;
        mainEntry.style.order = mainEntryOrder - 1;
    }
}
function goDown(button) {
    const mainEntry = button.closest('.table_entry');
    const mainEntryOrder = parseInt(getComputedStyle(mainEntry).order);
    if (mainEntryOrder != entriesAmount - 1) {
        const upperEntry = (function() {
            const entries = document.querySelectorAll('.table_entry');
            for (const entry of entries) {
                const entryOrder = parseInt(getComputedStyle(entry).order);
                if (entryOrder == mainEntryOrder + 1) {
                    return entry
                }
            }
        }) ();
        upperEntry.style.order = mainEntryOrder;
        mainEntry.style.order = mainEntryOrder + 1;
    }
}