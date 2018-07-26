/*
chrome.runtime.onInstalled.addListener(function(){
    //set default color
    //
    chrome.storage.sync.set({resetCol: '#3aa757'}, function(){
        console.log("The color is green.");
    });

    // check if website host is developer.chrome.com
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
*/


chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("test");
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
};

