pageAction(['https://isiscs.uit.tufts.edu/psc/csprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?PortalActualURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentURL=https%3a%2f%2fisiscs.uit.tufts.edu%2fpsc%2fcsprd%2fEMPLOYEE%2fPSFT_SA%2fc%2fSA_LEARNER_SERVICES.CLASS_SEARCH.GBL&PortalContentProvider=PSFT_SA&PortalCRefLabel=Search%20for%20Classes&PortalRegistryName=EMPLOYEE&PortalServletURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsp%2fpaprd%2f&PortalURI=https%3a%2f%2fisis.uit.tufts.edu%2fpsc%2fpaprd%2f&PortalHostNode=EMPL&NoCrumbs=yes&PortalKeyStruct=yes'], function() {

$('#DERIVED_REGFRM1_TITLE1').append('<br /><form id="gsis_class_search_quick_search" >Already know the class you want? Try a quick search!<br /> <input id="quick_seach_input" type="text" placeholder="Example (DR 18)"> </form>')

var tags = [
	{ value:'ACL', label:'ACL', desc:'All College' }, 
	{ value:'AFR', label:'AFR', desc:'Africana Studies' }, 
	{ value:'AMER', label:'AMER', desc:'American Studies' }, 
	{ value:'ANTH', label:'ANTH', desc:'Anthropology' }, 
	{ value:'ANW', label:'ANW', desc:'Africa In the New World' }, 
	{ value:'ARB', label:'ARB', desc:'Arabic' }, 
	{ value:'ARCH', label:'ARCH', desc:'Archeology' }, 
	{ value:'AST', label:'AST', desc:'Astronomy' }, 
	{ value:'BIO', label:'BIO', desc:'Biology' }, 
	{ value:'BME', label:'BME', desc:'Biomedical Engineering' }, 
	{ value:'CD', label:'CD', desc:'Child Development' }, 
	{ value:'CEE', label:'CEE', desc:'Civil & Environmental Eng' }, 
	{ value:'CH', label:'CH', desc:'Community Health' }, 
	{ value:'CHBE', label:'CHBE', desc:'Chemical & Biological Eng' }, 
	{ value:'CHEM', label:'CHEM', desc:'Chemistry' }, 
	{ value:'CHNS', label:'CHNS', desc:'Chinese' }, 
	{ value:'CIS', label:'CIS', desc:'Ctr for Interdis Studies' }, 
	{ value:'CIV', label:'CIV', desc:'World Civilization' }, 
	{ value:'CLS', label:'CLS', desc:'Classics' }, 
	{ value:'COMP', label:'COMP', desc:'Computer Science' }, 
	{ value:'DNC', label:'DNC', desc:'Dance' }, 
	{ value:'DR', label:'DR', desc:'Drama' }, 
	{ value:'EC', label:'EC', desc:'Economics' }, 
	{ value:'ED', label:'ED', desc:'Education' }, 
	{ value:'EDS', label:'EDS', desc:'Education at Museum School' }, 
	{ value:'EE', label:'EE', desc:'Electrical & Computer Eng' }, 
	{ value:'ELS', label:'ELS', desc:'Entrepreneurial Leadership' }, 
	{ value:'EM', label:'EM', desc:'Engineering Management' }, 
	{ value:'ENG', label:'ENG', desc:'English' }, 
	{ value:'ENGS', label:'ENGS', desc:'English (Museum)' }, 
	{ value:'ENP', label:'ENP', desc:'Engineering Psychology' }, 
	{ value:'ENV', label:'ENV', desc:'Environmental Studies' }, 
	{ value:'EOS', label:'EOS', desc:'Earth and Ocean Sciences' }, 
	{ value:'ES', label:'ES', desc:'Engineering Science' }, 
	{ value:'EXP', label:'EXP', desc:'Experimental College' }, 
	{ value:'FAH', label:'FAH', desc:'History of Art' }, 
	{ value:'FAHS', label:'FAHS', desc:'Art History' }, 
	{ value:'FAM', label:'FAM', desc:'Studio Art - Medford Campus' }, 
	{ value:'FAMB', label:'FAMB', desc:'Studio Art - Museum School' }, 
	{ value:'FAMD', label:'FAMD', desc:'Fine Arts - MFA Day' }, 
	{ value:'FR', label:'FR', desc:'French' }, 
	{ value:'GER', label:'GER', desc:'German' }, 
	{ value:'GIS', label:'GIS', desc:'Geographic Information Systems' }, 
	{ value:'GRK', label:'GRK', desc:'Greek' }, 
	{ value:'HEB', label:'HEB', desc:'Hebrew' }, 
	{ value:'HIST', label:'HIST', desc:'History' }, 
	{ value:'IDIS', label:'IDIS', desc:'Interdisciplinary' }, 
	{ value:'ILVS', label:'ILVS', desc:'Intern.Literary&Visual Studies' }, 
	{ value:'INTR', label:'INTR', desc:'International Relations' }, 
	{ value:'ITAL', label:'ITAL', desc:'Italian' }, 
	{ value:'JPN', label:'JPN', desc:'Japanese' }, 
	{ value:'JS', label:'JS', desc:'Judaic Studies' }, 
	{ value:'LAS', label:'LAS', desc:'Latin American Studies' }, 
	{ value:'LAT', label:'LAT', desc:'Latin' }, 
	{ value:'LING', label:'LING', desc:'Linguistics' }, 
	{ value:'LMS', label:'LMS', desc:'Leadership Studies Minor' }, 
	{ value:'MATH', label:'MATH', desc:'Mathematics' }, 
	{ value:'ME', label:'ME', desc:'Mechanical Engineering' }, 
	{ value:'ML', label:'ML', desc:'Modern Language' }, 
	{ value:'MUS', label:'MUS', desc:'Music' }, 
	{ value:'NU', label:'NU', desc:'Nutrition Undergraduate' }, 
	{ value:'OTS', label:'OTS', desc:'Occupational Therapy' }, 
	{ value:'PE', label:'PE', desc:'Physical Education' }, 
	{ value:'PHIL', label:'PHIL', desc:'Philosophy' }, 
	{ value:'PHY', label:'PHY', desc:'Physics' }, 
	{ value:'PJS', label:'PJS', desc:'Peace & Justice Studies' }, 
	{ value:'POR', label:'POR', desc:'Portuguese' }, 
	{ value:'PS', label:'PS', desc:'Political Science' }, 
	{ value:'PSY', label:'PSY', desc:'Psychology' }, 
	{ value:'REL', label:'REL', desc:'Religion' }, 
	{ value:'RUS', label:'RUS', desc:'Russian' }, 
	{ value:'SOC', label:'SOC', desc:'Sociology' }, 
	{ value:'SPN', label:'SPN', desc:'Spanish' }, 
	{ value:'SWA', label:'SWA', desc:'Swahili' }, 
	{ value:'UEP', label:'UEP', desc:'Urban & Env Policy & Planning' }, 
	{ value:'WGSS', label:'WGSS', desc:'Women\'s, Gender, and Sexuality' }, 
	{ value:'WL', label:'WL', desc:'World Literature' } 
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

var testarray = test.split(" ");

$('#SSR_CLSRCH_WRK_SSR_OPEN_ONLY\\$chk\\$3').val('N');

$('#SSR_CLSRCH_WRK_SUBJECT\\$76\\$\\$1').val(testarray[0]);

var numd = testarray[1].length;

while (numd < 4)
{
	testarray[1] = '0' + testarray[1];
	numd = testarray[1].length;
}

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

