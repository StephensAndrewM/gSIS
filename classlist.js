
var observer, callback;

callback = function(allmutations){

	var courseList = [];
	var course;
	$(".SSSHYPERLINKBOLD").each(function(i){
		courseList[i] = $(this).text();
	})

	$.each(courseList, function(i){
		course = $('<div class="course_name">'+courseList[i]+'</div>');
		$("#win0divDERIVED_SSTSNAV_GROUP_BOX\\$198\\$").append(course);
		$(course).data("i", i);
});
	$(".course_name").hover(function(){
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
			$.each(class_sections, function(j){
				var section_info = class_sections[j];
				var section = $('<div class="gsis_course_block"></div>');
				section.append('<div class="gsis_course gsis_course_time">'+section_info[0]+"</div>");
				section.append('<div class="gsis_course gsis_course_location">'+section_info[1]+"</div>");
				section.append('<div class="gsis_course gsis_course_professor">'+section_info[2]+"</div>");
				section.append('<div class="gsis_course gsis_course_dates">'+section_info[3]+"</div>");
				courseName.append(section);
				courseName.addClass("added");
			});
		}, 500);
	});
}


observer = new MutationObserver(callback);
var  options = {
	'childList': true
}; 
article = document.querySelector("#win0divPAGECONTAINER");
if(article != null) {
	console.log("ÖBSERVING");
	observer.observe(article, options);
}
