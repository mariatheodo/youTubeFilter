chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("Blocking all!");
	chrome.tabs.executeScript( {
		code: 'document.body.style.width = "600px"'
	});
});

