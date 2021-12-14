var btn = document.getElementById("btn");
var para = document.getElementById("para");
var next = document.getElementById("next");
btn.addEventListener("click", function() {
    next.style.display = ""
    btn.style.display = "none";
    para.style.display = "";
    fetch('https://icanhazdadjoke.com/slack').then(data => data.json()).then(jokeData => {
    const jokeText = jokeData.attachments[0].text;

    para.innerText = jokeText;
})
})
next.addEventListener("click", function() {
    para.innerText = "Loading..."
    fetch('https://icanhazdadjoke.com/slack').then(data => data.json()).then(jokeData => {
    const jokeText = jokeData.attachments[0].text;

    para.innerText = jokeText;
})
})