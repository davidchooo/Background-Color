
//create buttons
let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            console.log("test");
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'document.body.style.backgroundColor = "' + item + '";'});
            });
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);

/*
// reset the background
let reset = document.getElementById('reset');

reset.onclick = function(element) {
    let color = chrome.storage.sync.get(['resetCol'], function(){
        console.log("Reset color obtained.");
    });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};
*/
