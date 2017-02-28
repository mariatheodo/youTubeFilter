
$(document).ready(function() {
	var block = "Είσαι το ταίρι μου Ε13 full";

$('a').each(function() {
	console.log($(this));
	if ($(this).attr("title") === block) {
	$(this).remove();
	}
});

});
