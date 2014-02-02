$('#TFP_HEADER_BG').append('<form id="magic_form"><input id="magic_box" type="text" placeholder="do something"></form>');

var commands = [
{value:'Meal Plan', label:'Meal Plan', desc:'Change meal plan', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_SS_STDNT_MLPLN.GBL?pslnkid=TFP_SS_MEAL_PLAN'},
{value:'Class Search', label:'Class Search', desc:'Search for a class', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL'},
{value:'Home', label:'Home', desc:'Search for a class', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/h/?tab=DEFAULT&pt_fname=TFP_STUDENT_HOME_FLDR&FolderPath=PORTAL_ROOT_OBJECT.TFP_H_FLDR.TFP_STUDENT_HOME_FLDR&IsFolder=true'},
{value:'Shopping Cart', label:'Shopping Cart', desc:'Go to my Shopping Cart', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL'},
{value:'Planner', label:'Planner', desc:'Go to my Planner', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL'},
{value:'Drop a Class', label:'Drop a Class', desc:'Go to drop form', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_DROP.GBL'}

];

console.log($('#magic_box'));

if($('#magic_box')!=undefined){
	$( '#magic_box' ).autocomplete({
  source: commands //["test", "sushi", "iSISux"]
})
	.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li>" )
		.append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
		.appendTo( ul );
	};

	$('#magic_form').submit(function(){

		var command = $('#magic_form').find('input').val();

		for(var i=0; i<commands.length; i++) 
		{

			if(command==commands[i].value)
			{
				console.log(commands[i].url);
				window.location.replace(commands[i].url);
			}
		}
		return false;
	});
}
