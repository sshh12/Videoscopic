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
    }, 1500);

    return true;
});