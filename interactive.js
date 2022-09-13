// delegated add event lisiter to the parent of players card 
document.getElementById("players-parent").addEventListener("click", function (event) {
    const player= playerSelected();
    // condition for got only button of every players card 
    if (event.target.tagName == "BUTTON") {
        // condition for add maximum 5 
        if (player < 5) {
            event.target.setAttribute("disabled", true);
            event.target.classList.add("btn-secondary")
            const selectedParent = document.getElementById("selected-parent")
            const selectedPlayerName = event.target.parentNode.childNodes[1].innerText;
            const newPlayer = document.createElement("li")
            newPlayer.classList.add("mt-4");
            newPlayer.innerText = selectedPlayerName;
            selectedParent.appendChild(newPlayer)
        }
        else {
            return alert("Only you can choose 5 players")
        }

    }
})


// delegated add event lister to the partent of calculate and calculate total button
document.getElementById("calculation-parent").addEventListener("click", function (event) {
    const player = playerSelected();
    if (event.target.tagName == "BUTTON") {
        if (event.target.id == "calculate") {
        const perPlayerRateNum=getInputFieldValueById("per-player-rate",false)
        const playerExpenses = player * perPlayerRateNum;
        setElementInnerTextById("player-expenses",playerExpenses)
    
        }
        else if (event.target.id == "calculate-total") {
        const playerExpensesNum = getElementValueById("player-expenses",false);
        const managerNum = getInputFieldValueById("manager",false);
        const coachNum = getInputFieldValueById("coach",false);
        const totalCoast = playerExpensesNum + managerNum + coachNum;
        setElementInnerTextById("total",totalCoast);
        }
    }
})
