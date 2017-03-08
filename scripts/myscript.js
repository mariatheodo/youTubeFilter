document.addEventListener('DOMContentLoaded', function() {
	var list = document.getElementsByTagName("a");
	var blocked = 0;
	for (var i =0; i < list.length; i++) {
		if (list[i].innerHTML.toLowerCase().includes("winx")) {
			blocked++;
		       list[i].parentElement.parentElement.parentElement.style.display = 'none';
		}
	}
});

document.addEventListener('scroll', function() {
	var list = document.getElementsByTagName("a");
	var blocked = 0;
	for (var i =0; i < list.length; i++) {
		if (list[i].innerHTML.toLowerCase().includes("winx")) {
			blocked++;
		       list[i].parentElement.parentElement.parentElement.style.display = 'none';
		}
	}
});

document.addEventListener('wheel', function() {
	var list = document.getElementsByTagName("a");
	var blocked = 0;
	for (var i =0; i < list.length; i++) {
		if (list[i].innerHTML.toLowerCase().includes("winx")) {
			blocked++;
		       list[i].parentElement.parentElement.parentElement.style.display = 'none';
		}
	}
});