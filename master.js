var pageAction = function(urls, action) {

	var include = false;
	for (var i in urls) {
		if (location.href == urls[i]) {
			include = true;
		}
	}

	if (include) { action.call(); }

}