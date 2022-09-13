// delegated add event lisiter to the parent of players card 
document.getElementById("players-parent").addEventListener("click", function (event) {
    // condition for got only button of every players card 
    if (event.target.tagName == "BUTTON") {
        const playerSelected = document.querySelectorAll("#selected-parent li");
        const player = playerSelected.length
        // condition for add maximum 5 
        if (player < 5) {
            event.target.setAttribute("disabled", true)
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
