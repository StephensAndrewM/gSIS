var classData = [];
//console.log(frame.find("#STDNT_ENRL_SSVW\\$scroll\\$0".find("tr")));
window.setTimeout(function(){
	console.log("I AM HAPPENING");
	$(".PSLEVEL2SCROLLAREAHEADER").each(function(){
	console.log("yo");
	location.href = $(this).attr("href");

})
},2000)

/*
$("#STDNT_ENRL_SSVW\\$scroll\\$0").find("tr").each(function(i){
	var classRow = [];
	$(this).find("td").each(function(i){
		classRow[i] = $(this).text();
	})
	classData[i] = classRow;
	console.log(classData);
}) 
*/