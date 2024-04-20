let isClicked = [false, false, false];
let alreadyDone = false;
function allClicked(ClickedArray) {
    for (let i = 0; i < isClicked.length; i++)
        if (isClicked[i] == false) {
            return false;
        }
    return true;
}

function randomNumber(numObject) {
    let arrayIndex = numObject.getAttribute("id");
    let arrayI = Number(arrayIndex.substr(3)) - 1;
    if (isClicked[arrayI]) return;

    isClicked[arrayI] = true;
    let rand = Math.floor(Math.random() * 3);
    numObject.innerHTML = rand;
}

function checkVictory() {
    if (allClicked(isClicked) == false) return;
    if (alreadyDone) return;

    let numberArray = document.getElementsByClassName("num");
    let isVictory = true;
    for (let i = 0; i < numberArray.length - 1; i++) {
        if (numberArray[i].innerHTML != numberArray[i + 1].innerHTML) {
            createResultMessage(false);
            alreadyDone = true;
            return;
        }
    }
    createResultMessage(true);
    alreadyDone = true;
}

function createResultMessage(isVictory) {
    let parent = document.getElementById("gamble");
    let resultMessage = document.createElement("p");
    resultMessage.setAttribute("id", "result");
    resultMessage.style.color = "brown";
    resultMessage.style.fontStyle = "italic";
    if (isVictory) resultMessage.innerHTML = "Success(click here to do again)";
    else resultMessage.innerHTML = "fail(click here to do again)";
    resultMessage.onclick = function () {
        let p = document.body;
        p.removeChild(this);
        initializeGamble();
    };
    document.body.appendChild(resultMessage);
}

function initializeGamble() {
    let gambleArray = document.getElementsByClassName("num");
    for (let i = 0; i < isClicked.length; i++) {
        isClicked[i] = false;
        gambleArray[i].innerHTML = "0";
    }
    alreadyDone = false;
}
