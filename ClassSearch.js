
$('#DERIVED_REGFRM1_TITLE1').append('<br /><form id="gsis_class_search_quick_search" >Already know the class you want? Try a quick search!<br /> <input type="text" placeholder="DR 18"> </form>')

$('#gsis_class_search_quick_search').submit(function(){

var test = 'comp 2';

var testarray = test.split(" ");

$('#SSR_CLSRCH_WRK_SUBJECT\\$76\\$\\$1').val(testarray[0]);

$('#SSR_CLSRCH_WRK_CATALOG_NBR\\$2').val(testarray[1]);	

var submit = $('#CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH').attr('href');

if (window.location.href == 'https://isiscs.uit.tufts.edu/psc/csprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?PortalActualURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentProvider=PSFT_SA&PortalCRefLabel=Search%20for%20Classes&PortalRegistryName=EMPLOYEE&PortalServletURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsp%2fpaprd%2f&PortalURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsc%2fpaprd%2f&PortalHostNode=EMPL&NoCrumbs=yes&PortalKeyStruct=yes')
{
	window.location.href = submit;

}
return false;
}
)


window.setTimeout(function(){



}, 2000);


