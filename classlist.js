



var observer, callback;

callback = function(allmutations){

var courseList = [];
var course;
$(".SSSHYPERLINKBOLD").each(function(i){
	courseList[i] = $(this).text();
	console.log(courseList[i]);
})

$.each(courseList, function(i){
	course = $('<div class="course_name">'+courseList[i]+'</div>');
	console.log(course)
	$("#win0divDERIVED_SSTSNAV_GROUP_BOX\\$198\\$").append(course);
	$(course).data("i", i);
	//when rolled over the table to parse from is at id= "ACE_$ICField236$"+i
});

$(".course_name").hover(function(){
	var i = $(this).data("i");
	$("#\\$ICField236\\$scroll\\$"+i).find("#\\$ICField236\\$hviewall\\$"+i).each(function(){
		var script = $(this).attr("href");
	 	window.location.href = script;
	});
	var class_sections = [];
	$("#ACE_\\$ICField236\\$"+i).find(".PSLEVEL1GRIDWBO").each(function(j){
		var class_info = [];
		$(this).find(".PSLONGEDITBOX").each(function(k){
			class_info[k] = $(this).text();
			console.log(class_info[k]);
		});
		class_sections[j] = class_info;
	});
	$.each(class_sections, function(j){
		var section_info = class_sections[j];
		console.log("111111111");
		var section = $('<div class="gsis_course_block"></div>');
			console.log("22222222222");
			section.append('<div class="gsis_course gsis_course_time">'+class_sections[0]+"</div>");
			section.append('<div class="gsis_course gsis_course_location">'+class_sections[1]+"</div>");
			section.append('<div class="gsis_course gsis_course_professor">'+class_sections[2]+"</div>");
			section.append('<div class="gsis_course gsis_course_dates">'+class_sections[3]+"</div>");
			console.log($(this).parent());
		$(this).append(section);
	});
});
	//console.log("I AM HAPPENING");
	//$("a.PSLEVEL2SCROLLAREAHEADER:first-child").each(function(i){
	//$(".PABACKGROUNDINVISIBLEWBO").each(function(i){
	//	var script = $(this).attr("href");
	//	console.log(i, script);

	 //	setTimeout(function(){

	//		window.location.href = script;
	//		console.log('go', i, script);
	//	}, i*2000);

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
