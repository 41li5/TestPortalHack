chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.storage.sync.set({
            'myonoffswitch': false
        }, function() {});
    }
});

function change(){
    console.log(document.getElementById('myonoffswitch').checked)
    chrome.storage.sync.set({
        'myonoffswitch': (document.getElementById('myonoffswitch').checked)
    }, function() {});
}
chrome.storage.sync.get('myonoffswitch', function(storage) {
    $('#myonoffswitch').prop('checked', storage.myonoffswitch);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#myonoffswitch').addEventListener('change', change);
});

console.log("website ok");