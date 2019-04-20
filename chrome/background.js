function base64ToBlob(base64, mime)
{
    mime = mime || '';
    var sliceSize = 1024;
    var byteChars = window.atob(base64);
    var byteArrays = [];

    for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        var slice = byteChars.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: mime});
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if(request.type !== "screenshot"){
        return false;
    }

    console.log("sent from tab.id=" + sender.tab.id);

    // sendResponse("sent from tab.id=" + sender.tab.id);
    setTimeout(function () {
    chrome.tabs.captureVisibleTab(null, {format: 'png', quality: 100}, function (dataURI) {
        // send to server
        dataURI = dataURI.replace(/^data:image\/(png|jpg);base64,/, "");
        var blob = base64ToBlob(dataURI, "img/png");
        var formData = new FormData();
        formData.append('img', blob);

            $.ajax({"url": "http://e44bd8fa.ngrok.io/api/image", method: "POST", contentType: false, processData: false, data: formData})
                .done(function (data) {
                    console.log("dada", data);
                    sendResponse(data);
                })
        });
    }, 700);

    return true;
});




chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if(request.type !== "nlp"){
        return false;
    }

    $.ajax({"url": "http://e44bd8fa.ngrok.io/api/text", method: "POST", data: {"text": request.text}})
    .done(function (data) {
        console.log("text dada", data);
        sendResponse(data);
    })
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if(request.type !== "bias"){
        return false;
    }

    $.ajax({"url": "http://e44bd8fa.ngrok.io/api/bias", method: "POST", data: {"text": request.name}})
        .done(function (data) {
            console.log("text dada", data);
            sendResponse(data);
        })
});



//
//

//
//
// const endpoint = "https://www.googleapis.com/youtube/v3/videos";
// const key = "AIzaSyCaHWZYPuLv4cD6k-TQjg4Jx_1GQnG1wFw";
//
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//
//     if (request.type !== "tags") {
//         return;
//     }
//
//     fetchTags(request.videoId)
//         .then(t => sendResponse({tags: t}))
//         .catch(e => sendResponse({error: "Error fetching tags: " + e}));
//
//     return true; // tells the runtime not to close the message channel
// });
//
//
// const fetchTags = videoId => {
//
//     const url = `${endpoint}?part=snippet&fields=items(snippet(tags))&id=${encodeURIComponent(videoId)}&key=${key}`;
//
//     console.log("url", url);
//
//     return fetch(url)
//         .then(console.log("resp", r))
//         .then(r => (r.items[0] && r.items[0].snippet.tags) || []);
// };
