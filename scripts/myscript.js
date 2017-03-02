document.addEventListener('DOMContentLoaded', function() {
	var list = document.getElementsByTagName("a");
	console.log(list);
	for (var i =0; i < list.length; i++) {
		if (list[i].innerHTML.toLowerCase().includes("winx")) {
			console.log(list[i]);
		       list[i].parentElement.parentElement.parentElement.style.display = 'none';
		}
	}
});
