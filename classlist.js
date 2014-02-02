



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
	console.log("HOVER")
	var i = $(this).data("i")
	console.log(i);
	$("#\\$ICField236\\$scroll\\$"+i).find("#\\$ICField236\\$hviewall\\$"+i).each(function(){
		var script = $(this).attr("href");
		console.log(i, script);

	 	window.location.href = script;
		console.log('go', i, script);	
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
