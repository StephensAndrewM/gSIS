
var observer, callback;

callback = function(allmutations){

	$('#win0divDERIVED_CLSRCH_GROUP6').parent().parent().hide();

	var courseList = [];
	var course;
	$(".SSSHYPERLINKBOLD").each(function(i){
		courseList[i] = $(this).text();
	})

	$.each(courseList, function(i){
		course = $('<div class="gsis_listel_title"><span>'+courseList[i]+'</span></div>');
		$("#win0divDERIVED_SSTSNAV_GROUP_BOX\\$198\\$").append(course);
		$(course).data("i", i);
	});

	$(".gsis_listel_title").hover(function(){
		if($(this).hasClass("added"))
			return;

		var i = $(this).data("i");
		$("#\\$ICField236\\$scroll\\$"+i).find("#\\$ICField236\\$hviewall\\$"+i).each(function(){
			var script = $(this).attr("href");
			window.location.href = script;
		});

		var courseName = $(this);
		
		setTimeout(function(){
			var class_sections = [];

			$("#ACE_\\$ICField236\\$"+i).find(".PSLEVEL1GRIDWBO").each(function(j){
				var class_info = [];
				$(this).find(".PSLONGEDITBOX").each(function(k){
					class_info[k] = $(this).text();
				});
				class_sections[j] = class_info;
			});

			$("#ACE_\\$ICField236\\$"+i).find('#CLASS_SRCH_WRK2_SSR_PB_SELECT\\$'+i).each(function(j) {
				console.log(class_sections);
				class_sections[j][4] = $(this).attr('href');
			});

			$("#ACE_\\$ICField236\\$"+i).find('.SSSIMAGECENTER').each(function(j) {
				class_sections[j][5] = $(this).attr('alt');
			});

			$.each(class_sections, function(j){
				var section_info = class_sections[j];
				var section = $('<div class="gsis_listel_block clearfix gsis_listel_status_'+section_info[5].toLowerCase().replace(/\s+/g, '')+'"></div>');
				section.append('<div class="gsis_course_data gsis_listel_data gsis_course_time">'+section_info[0]+"</div>");
				section.append('<div class="gsis_course_data gsis_listel_data gsis_course_location">'+section_info[1]+"</div>");
				section.append('<div class="gsis_course_data gsis_listel_data gsis_course_professor">'+section_info[2]+"</div>");
				section.append('<div class="gsis_course_data gsis_listel_data gsis_course_dates">'+section_info[3]+"</div>");
				section.append('<div class="gsis_course_data gsis_listel_data">'+section_info[5].toUpperCase()+'</div>');
				section.append('<div class="gsis_course_data gsis_listel_data"><a href="'+section_info[4]+'" class="gsis_listel_button">Add Class</a></div>');
				courseName.append(section);
			});
		}, 500);
		courseName.addClass("added");
	});

};


observer = new MutationObserver(callback);
var  options = {
	'childList': true
}; 
article = document.querySelector("#win0divPAGECONTAINER");
if(article != null) {
	console.log("ÖBSERVING");
	observer.observe(article, options);
}
