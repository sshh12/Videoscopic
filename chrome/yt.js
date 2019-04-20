let currentlyPaused = false;
let delayPassed = false;

setTimeout(function () {
    delayPassed = true;
},3000);


function onPaused() {
    currentlyPaused = true;
    if(!delayPassed){
        return
    }

    console.log("SIR");


    $("#container > h1 > yt-formatted-string").text("paused");

    chrome.runtime.sendMessage("screenshot", function(response) {

        // ADD DISPLAY HERE

        console.log("resp", response);
    });

}


function onPlayed() {
    // alert("unpaused");
    $("#container > h1 > yt-formatted-string").text("unpaused");
    currentlyPaused = false;
}

console.log("hi");

setInterval(function () {
    // if pasued
    if($("#movie_player").hasClass("paused-mode") && !currentlyPaused){
        onPaused();

    // was just unpaused
    } else if (!$("#movie_player").hasClass("paused-mode") && currentlyPaused) {
        onPlayed();
    }

}, 100);