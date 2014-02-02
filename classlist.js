

var observer, callback;

callback = function(allmutations){

var classData = [];
//console.log(frame.find("#STDNT_ENRL_SSVW\\$scroll\\$0".find("tr")));

	console.log("I AM HAPPENING");
	$("a.PSLEVEL2SCROLLAREAHEADER:first-child").each(function(i){
		var script = $(this).attr("href");
		console.log(i, script);
		//script = script.substr("javascript:".length);
		//eval(script);
	 	setTimeout(function(){
	// console.log($(this).attr("href"));
	// window.location.href = $(this).attr("href");
			window.location.href = script;
			console.log('go', i, script);
		}, i*2000);

})

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