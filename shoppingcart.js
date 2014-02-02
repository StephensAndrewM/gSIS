

//var frame = $("#ptifrmtgtframe").contents();


var classData = [];
//console.log(frame.find("#STDNT_ENRL_SSVW\\$scroll\\$0".find("tr")));


$("#STDNT_ENRL_SSVW\\$scroll\\$0").find("tr").each(function(i){
	var classRow = [];
	$(this).find("td").each(function(i){
		classRow[i] = $(this).text();
	})
	classData[i] = classRow;
	console.log(classData);
})

$.each(classData, function(i){
	if(i == 0)
		return;
	var classRow = classData[i];
	var course = $('<div class="gsis_course_block"></div>');
		course.append('<div class="gsis_course gsis_course_title">'+classRow[0] + ": " + classRow[1]+"</div>");
		course.append('<div class="gsis_course gsis_course_time">'+classRow[2]+"</div>");
		course.append('<div class="gsis_course gsis_course_location">'+classRow[3]+"</div>");
		course.append('<div class="gsis_course gsis_course_professor">'+classRow[4]+"</div>");
		course.append('<div class="gsis_course gsis_course_credit">'+classRow[5]+" credit</div>");
	$("#win0divDERIVED_SSTSNAV_GROUP_BOX\\$144\\$").append(course);
})














