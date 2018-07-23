chrome.runtime.onInstalled.addListener(function(){
    //set default color
    chrome.storage.sync.set({color: '#3aa757'}, function(){
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

