chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("Blocking all!");
	chrome.tabs.executeScript( {
		code: 'var list = document.getElementsByTagName('a');
		          for (var i =0; i < list.length; i++) {
		          	if (list[i].innerHTML.toLowerCase().includes("Χαρούλης")) {
		          		list[i].innerHTML = "";
		          	}
		          }'	
	});
});

