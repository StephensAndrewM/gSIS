

//var frame = $("#ptifrmtgtframe").contents();


var classData = [];
//console.log(frame.find("#STDNT_ENRL_SSVW\\$scroll\\$0".find("tr")));


$("#STDNT_ENRL_SSVW\\$scroll\\$0").find("tr").each(function(i){
	var classRow = [];
	$(this).find("td").each(function(i){
		classRow[i] = $(this).text();

		if (i == 6) {
			classRow[i] = $(this).find('img').attr('alt').replace(/\s+/g, '');
		}

	})
	classData[i] = classRow;
});

$.each(classData, function(i){
	if(i == 0)
		return;
	var classRow = classData[i];

	var course = $('<div class="gsis_course_block clearfix"></div>');
	var status = classRow[6].toLowerCase();
	var title = $('<div class="gsis_course_title gsis_course_status_'+status+'">'+classRow[0] + ": " + classRow[1]+"</div>");
	course.append(title);
	var courseData = $('<div class="gsis_course_data_container clearfix"></div>');
		if (classRow[2] != ' ') {
			courseData.append('<div class="gsis_course_data gsis_course_time">'+classRow[2]+"</div>");
		}
		courseData.append('<div class="gsis_course_data gsis_course_location">'+classRow[3]+"</div>");
		courseData.append('<div class="gsis_course_data gsis_course_professor">'+classRow[4]+"</div>");
		if (classRow[5] != ' ') {
			courseData.append('<div class="gsis_course_data gsis_course_credit">'+classRow[5]+" Credit</div>");	
		}

	course.append(courseData);
	$("#win0divDERIVED_SSTSNAV_GROUP_BOX\\$144\\$").append(course);
});

$('#win0divDERIVED_REGFRM1_GROUP6').parent().parent().remove();














