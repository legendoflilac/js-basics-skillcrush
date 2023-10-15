// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button that appears when guest list is full
const assignButton = document.querySelector(".assign");
// assigned list and dishes
const assignedItems = document.querySelector(".assigned-items")

//Event handler to add and clear guest names to the list
addGuestButton.addEventListener("click", function() {
    const guest = guestInput.value;
    //console.log(guest);
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
    }
    clearInput();
})

//Clear the input field for user
const clearInput = function() {
    guestInput.value = "";
}
//Add name to list
const addToList = function(guest) {
    const listItem = document.createElement("li");
        listItem.innerText = guest;
        guestList.append(listItem);
}

const updateGuestCount = function() {
    let guests = guestList.querySelectorAll(".guest-list li")
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
}

const assignItems = function() {
    const potluckItems = ['potato salad', 'fruit', 'hummus', 'cookies', 'hotdish', 'chips and dip', 'vegetable tray', 'cheese and crackers', 'sliders', 'apple pie', 'ice cream', 'soup']
    const allGuests = guestList.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        const randomPotluckItem = potluckItems[randomPotluckIndex];
        const listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
    }
}

assignButton.addEventListener("click", function() {
    assignItems();
    assignButton.disabled = true;
})