const select = document.querySelector ("select");
const outputText = document.querySelector (".output");

select.addEventListener ("change", setAnswer);

function setAnswer() {
    const choice = select.value;


    if (choice === "bruh") {
        outputText.textContent =
        "Im going to fucking piss on the floor";
    }

    else if (choice === "bruhTwo") {
        outputText.textContent =
        "PISS NUKE INCOMING";
    }

    else {
        outputText.textContent =
        "SHIT STORM";
    }
}