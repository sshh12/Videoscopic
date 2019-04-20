let currentlyPaused = false;
let delayPassed = false;
let textJson = null;
let biasJson = null;
let prevURL = window.location.href;

setTimeout(function () {
    delayPassed = true;
},3000);


// let commentText = '';
//
// for(let elem of document.getElementsByTagName('yt-formatted-string')) {
//   if(elem.text) commentText += elem.text.simpleText + '\n';
// }

function showWindow(onScreenData, contentData, biasData) {
    console.log("show", onScreenData, contentData, biasData);

  let parentElem = document.getElementsByClassName('ytp-player-content ytp-iv-player-content')[0];
  let screenHTML = '';
  for(let person of onScreenData) {
    screenHTML += `
    <li class='ht-list-item'>
      <div>
        <a target="_blank" href='${person.url}'><img class='ht-img' src='${person.image_url}' /></a>
      </div>
      <div class='ht-img-desc'>
        <h4><b>${person.name}</b></h4>
        <p>${person.short_summary}</p>
      </div>
    </li>
    `
  }
  let contentHTML = '';
  for(let person of contentData) {
    contentHTML += `
    <li class='ht-list-item'>
      <div>
        <a target="_blank" href='${person.url}'><img class='ht-img' src='${person.image_url}' /></a>
      </div>
      <div class='ht-img-desc'>
        <h4><b>${person.name}</b></h4>
        <p>${person.short_summary}</p>
      </div>
    </li>
    `
  }
  let biasHTML = '';
  if(biasData.name != 'error') {
    biasHTML = `<span class='ht-header'>${biasData.name}: ${biasData.lean} / ${biasData.acc}</span>`;
  }
  let newHTML = `
  <div class="annotation annotation-type-custom iv-branding">
  <style>
  .ht-box {
  	background-color: #1F1F1FAA;
  	width: ${parentElem.clientWidth}px;
  	height: ${parentElem.clientHeight - 10}px;
  	color: #E3E3E3;
    font-family: 'Roboto', sans-serif;
    overflow: scroll !important;
    overflow-x: hidden;
  }
  .ht-box * {
    font-weight: normal !important;
  }
  .ht-header {
  	margin-left: 10px !important;
  	margin-top: 10px !important;
  }
  .ht-info {
  	margin-left: 10px !important;
  	margin-top: 10px !important;
    overflow-y: scroll;
    display: flex;
  }
  .ht-left {
    width: ${parentElem.clientWidth / 2 - 1}px;
    float: left;
  }
  .ht-right {
    width: ${parentElem.clientWidth / 2 - 1}px;
    float: left;
  }
  .ht-img {
    height: 100px;
    width: 120px;
    border-radius: 8px;
  }
  .ht-list {
    list-style-type: none;
    padding-left: 0px !important;
  }
  .ht-list-item {
    display: flex;
    margin-bottom: 15px;
  }
  .ht-img-desc {
    float: left;
    padding-left: 10px;
  }
  </style>
  <div class="branding-img-container ht-box">
     <h1 class="ht-header">Hacked Together</h1>
     ${biasHTML}
     <div class="ht-info">
        <div class="ht-left">
          <h2>On Screen</h2>
          <ul class='ht-list'>${screenHTML}</ul>
        </div>
        <div class="ht-right">
          <h2>Related</h2>
          <ul class='ht-list'>${contentHTML}</ul>
        </div>
     </div>
  </div>
  </div>
  `;
  parentElem.innerHTML = newHTML;
}


function closeWindow() {
  document.getElementsByClassName('ytp-player-content ytp-iv-player-content')[0].innerHTML = '';
}


function onPaused() {
    currentlyPaused = true;
    if(!delayPassed){
        return
    }

    console.log("SIR");


    $("#container > h1 > yt-formatted-string").text("paused");
    chrome.runtime.sendMessage({type: "screenshot"}, function(response) {

        // response is picture data
        let intId = setInterval(function () {
            if(textJson !== null && biasJson !== null){
                clearInterval(intId);
                showWindow(response, textJson, biasJson);
            }
        }, 50)
    });

}


function onPlayed() {
    // alert("unpaused");
    $("#container > h1 > yt-formatted-string").text("unpaused");
    currentlyPaused = false;

    closeWindow();
}

setInterval(function () {
    // if pasued
    if($("#movie_player").hasClass("paused-mode") && !currentlyPaused){
        onPaused();

    // was just unpaused
    } else if (!$("#movie_player").hasClass("paused-mode") && currentlyPaused) {
        onPlayed();
    }

    if(window.location.href != prevURL) {
      biasJson = null;
      textJson = null;
      prevURL = window.location.href;
      setTimeout(gatherData, 1000);
    }

}, 100);


function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}


function gatherData() {
    $("#more").click();

    let desc = $("#description").text() + "\n";

    $(".tfyt-tag").each(function () {
        desc += $(this).text() + "\n";
    })


    chrome.runtime.sendMessage({type: "nlp", text: desc}, function(response) {
        console.log("text resppp", response);
        textJson = response;
        console.log("text resppp2", textJson);

    });

    let channelName = $("#owner-name > a").text();
    chrome.runtime.sendMessage({type: "bias", name: channelName}, function(response) {
        biasJson = response;

    });

}

setTimeout(gatherData, 3500);
