pageAction('https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL', function() {

	var header = $('<div class="gsis_header"></div>');
	header.append('<img src="http://placekitten.com/400/200" class="gsis_header_logo" />');

	var menu = $('<nav class="gsis_menu"></nav>');
	menu.append('<a href="">Home</a>');

	$('#TFP_HEADER_BG').append(header);

});