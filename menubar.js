	var header = $('<div id="gsis_header"></div>');
	//header.append('<img src="http://placekitten.com/400/200" class="gsis_header_logo" />');

	var nav = $('<nav class="gsis_menu"></nav>');
	var menu = $('<ul></ul>');
	nav.append(menu);

	var home = $('<li><a class="home-link" href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/h/?tab=DEFAULT&pt_fname=TFP_STUDENT_HOME_FLDR&FolderPath=PORTAL_ROOT_OBJECT.TFP_H_FLDR.TFP_STUDENT_HOME_FLDR&IsFolder=true">Home</a></li>');
	menu.append(home);
	var schedule = $('<li class="dropdown"><a class="schedule-link" href="">Schedule</a></li>');
	menu.append(schedule);
	var classes = $('<li class="dropdown"><a class="classes-link" href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL">Classes</a></li>');
	menu.append(classes);
	var request = $('<li class="dropdown"><a class="request-link" href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_TSRQST_OFF.GBL">Request</a></li>');
	menu.append(request);
	var resources = $('<li class="dropdown"><a class="resources-link" href="">Resources</a></li>');
	menu.append(resources);

	var logout_link = $('#TFP_LOGOUT_LINK').attr('onclick');
	var logout = $('<li class="rightlink"><a class="logout-link" href="javascript:'+logout_link+'">Log Out</a></li>');
	menu.append(logout);
	var help = $('<li class="rightlink"><a class="help-link" href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/s/WEBLIB_IS_AW.ISCRIPT1.FieldFormula.IScript_AssemblePage?AWGroupID=TFP_HELP&AWPageID=TFP_HELP&AWObjName=TFP_HELP_LPG">Help</a></li>');
	menu.append(help);

	var schedule_ul = $('<ul></ul>');
	schedule_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL#schedule">My Schedule</a></li>');
	schedule_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL">Planner</a></li>');
	schedule_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL">Enroll</a></li>');
	schedule_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_DPR_ADB.GBL">Advisement Report</a></li>');
	schedule_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_WHATIF_SEL.GBL">What-If Scenario</a></li>');
	schedule_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_APPT.GBL">Enrollment Info</a></li>');
	schedule.append(schedule_ul);

	var classes_ul = $('<ul></ul>');
	classes_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL">Browse/Add</a></li>');
	classes_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_DROP.GBL">Drop</a></li>');
	classes_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_SWAP.GBL">Swap</a></li>');
	classes_ul.append('<li><a href="https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_EDIT.GBL">Edit Enrollment</a></li>');
	classes.append(classes_ul);

	var request_ul = $('<ul></ul>');
	request_ul.append($('#level2_6').html());
	request.append(request_ul);

	var resources_ul = $('<ul></ul>');
	resources_ul.append($('#level2_2').html());
	resources.append(resources_ul);

	$('#TFP_HEADER_BG').append(header);
	$('#TFP_HEADER_BG').append(nav);

	var t;
	nav.find('li.dropdown').hover(function() {
		clearTimeout(t);
		$(this).find('ul').css({ display:'block' }).stop().animate({ opacity:1 }, 200);
	}, function() {
		$(this).find('ul').stop().animate({ opacity:0 }, 200);
		var self = $(this);
		t = window.setTimeout(function() {
			self.find('ul').css({ display:'none' });
		}, 500)
	});