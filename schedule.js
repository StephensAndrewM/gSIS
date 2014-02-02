pageAction(['https://isiscs.uit.tufts.edu/psc/csprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?PortalActualURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentProvider=PSFT_SA&PortalCRefLabel=Search%20for%20Classes&PortalRegistryName=EMPLOYEE&PortalServletURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsp%2fpaprd%2f&PortalURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsc%2fpaprd%2f&PortalHostNode=EMPL&NoCrumbs=yes&PortalKeyStruct=yes'], function() {


var pathname = top.location.href;
var path = 'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL#schedule';

if(pathname == path) 
{
	//ptifrmtgtframe.hide();
	var stuff = 'comp 11';
		$('#quick_seach_input').val(stuff);	

		$('#gsis_class_search_quick_search').submit();

window.setTimeout(function(){

window.location.href = "javascript:submitAction_win0(document.win0,'DERIVED_SSS_ENR_SS_CLS_SCHED_LINK');";


},1000);
//ptifrmtgtframe.show();
}

});