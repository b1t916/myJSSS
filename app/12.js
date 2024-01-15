function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createText() {
    var text = document.createElement("div");
    text.className = "text";
    text.textContent = "N÷";
    text.style.top = getRandomNumber(0, window.innerHeight - 50) + "px";
    text.style.left = getRandomNumber(0, window.innerWidth - 50) + "px";
    text.style.fontSize = getRandomNumber(10, 50) + "px";
    document.body.appendChild(text);

    setTimeout(function() {
        text.style.display = "none";
        setTimeout(function() {
            text.style.display = "block";
            setTimeout(function() {
                text.remove();
            }, getRandomNumber(1000, 3000));
        }, getRandomNumber(2000, 5000));
    }, getRandomNumber(2000, 5000));
}

setInterval(createText, 200);