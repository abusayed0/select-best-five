// delegated add event lisiter to the parent of players card 
document.getElementById("players-parent").addEventListener("click", function (event) {
    // get selected player number 
    const player = playerSelected();
    // condition for got only button of every players card 
    if (event.target.tagName == "BUTTON") {
        // condition for add maximum 5 
        if (player < 5) {
            setElementInnerTextById("player-expenses","")
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
            return alert("You can choose only 5 players")
        }

    }
})

// delegated add event lister to the partent of calculate and calculate total button
document.getElementById("calculation-parent").addEventListener("click", function (event) {

    // condition for get only btn 
    if (event.target.tagName == "BUTTON") {
        // condition for get the calculate btn 
        if (event.target.id == "calculate") {
            // code for calculate btn start 

            // get selected player number 
            const player = playerSelected();
            // get per player value string 
            const perPlayerRateStr = getInputFieldValueById("per-player-rate", true);
            // get per player value number 
            const perPlayerRateNum = getInputFieldValueById("per-player-rate", false)
            if (player < 1 && (perPlayerRateStr == "" || isNaN(perPlayerRateStr))) {
                return alert("please choose atleast 1 player first then input a valid number")
            }
        
            else if (perPlayerRateStr == "" || isNaN(perPlayerRateStr)) {
                setElementInnerTextById("player-expenses","")
                return alert("please input a vailid number")
            }
            else if (player < 1) {
                return alert("please atleast choose 1 player first")
            }
            else {
                const playerExpenses = player * perPlayerRateNum;

                setElementInnerTextById("player-expenses", playerExpenses)
            }
            // code for calculate btn end 
        }


        // condition for get calculate total btn 
        else if (event.target.id == "calculate-total") {
            const playerExpensesNum = getElementValueById("player-expenses", false);
            const managerNum = getInputFieldValueById("manager", false);
            const coachNum = getInputFieldValueById("coach", false);
            const totalCoast = playerExpensesNum + managerNum + coachNum;

            setElementInnerTextById("total", totalCoast);
        }
    }
})
