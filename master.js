var pageAction = function(url, action) {

	if (location.href == url) {
		action.call();
	}

}