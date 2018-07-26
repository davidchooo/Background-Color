//chrome.runtime.onMessage.addListener(changeColor);

function changeColor(color){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
}

//create buttons
let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (let color of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = color;

        button.addEventListener('click', changeColor.bind(null, color));
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);
