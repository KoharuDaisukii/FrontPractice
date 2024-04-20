let cards = document.getElementsByTagName("img");
for (let i = 0; i < cards.length; i++) {
    cards[2 - i].style.zIndex = i + 100;
    cards[i].style.left = 10 + "px";
    cards[i].style.top = 10 + "px";
}

function changeZIndex(target) {
    // 0이하로 내려가면 다시 3으로 zindex 되게 하려했는데
    target.style.zIndex--;
    // whatZIndex();
}

function whatZIndex() {
    let removeTarget = document.getElementsByTagName("span");
    for (let i = 0; i < removeTarget.length; i++)
        document.body.removeChild(removeTarget[i]);
    let zindexElement = document.createElement("span");
    zindexElement.innerHTML =
        "" +
        cards[0].style.zIndex +
        cards[1].style.zIndex +
        cards[2].style.zIndex +
        "";
    document.body.appendChild(zindexElement);
}
