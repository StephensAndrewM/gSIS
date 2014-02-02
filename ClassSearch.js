pageAction('https://isiscs.uit.tufts.edu/psc/csprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?PortalActualURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentProvider=PSFT_SA&PortalCRefLabel=Search%20for%20Classes&PortalRegistryName=EMPLOYEE&PortalServletURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsp%2fpaprd%2f&PortalURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsc%2fpaprd%2f&PortalHostNode=EMPL&NoCrumbs=yes&PortalKeyStruct=yes', function() {

$('#DERIVED_REGFRM1_TITLE1').append('<br /><form id="gsis_class_search_quick_search" >Already know the class you want? Try a quick search!<br /> <input id="quick_seach_input" type="text" placeholder="DR 18"> </form>')

var tags = [
{
	value: "test",
	label: "TEST",
	desc: "This is simply a test"
},
{
	value: "sushi",
	label: "Sushi",
	desc: "Sushi is pretty tasty"
},
{
	value: "isis",
	label: "ISIS",
	desc: "iSIS is kinda terrible"
}

];

$( '#quick_seach_input' ).autocomplete({
  source: tags //["test", "sushi", "iSISux"]
})
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
        .appendTo( ul );
    };

$('#gsis_class_search_quick_search').submit(function(){

var test = $('#gsis_class_search_quick_search').find('input').val();

console.log(test);

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
);

});

