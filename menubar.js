pageAction(['https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL'], function() {

	var header = $('<div class="gsis_header"></div>');
	//header.append('<img src="http://placekitten.com/400/200" class="gsis_header_logo" />');

	var nav = $('<nav class="gsis_menu"></nav>');
	var menu = $('<ul></ul>');
	nav.append(menu);

	var home = $('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/h/?tab=DEFAULT&pt_fname=TFP_STUDENT_HOME_FLDR&FolderPath=PORTAL_ROOT_OBJECT.TFP_H_FLDR.TFP_STUDENT_HOME_FLDR&IsFolder=true">Home</a></li>');
	menu.append(home);
	var schedule = $('<li class="dropdown"><a href="">Schedule</a></li>');
	menu.append(schedule);
	var classes = $('<li class="dropdown"><a href="">Classes</a></li>');
	menu.append(classes);
	var request = $('<li><a href="">Request</a></li>');
	menu.append(request);

	var schedule_ul = $('<ul></ul>');
	schedule_ul.append('<li><a href="">Planner</a></li>');
	schedule_ul.append('<li><a href="">Enroll</a></li>');
	schedule_ul.append('<li><a href="">Advisement Report</a></li>');
	schedule_ul.append('<li><a href="">What-If Scenario</a></li>');
	schedule_ul.append('<li><a href="">Enrollment Info</a></li>');
	schedule.append(schedule_ul);

	var classes_ul = $('<ul></ul>');
	classes_ul.append('<li><a href="">Browse/Add</a></li>');
	classes_ul.append('<li><a href="">Drop</a></li>');
	classes_ul.append('<li><a href="">Swap</a></li>');
	classes_ul.append('<li><a href="">Edit Enrollment</a></li>');
	classes.append(classes_ul);

	$('#TFP_HEADER_BG').append(header);
	$('#TFP_HEADER_BG').append(nav);

	nav.find('li.dropdown').hover(function() {
		$(this).find('ul').animate({ display:'block' }, 500);
	}, function() {
		$(this).find('ul').animate({ display:'none' }, 500);
	});

});