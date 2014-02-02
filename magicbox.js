$('#TFP_HEADER_BG').append('<form id="magic_form"><input id="magic_box" type="text" placeholder="Find a Feature"></form>');

var commands = [
{value:'Help', label:'Help', desc:'View help menu', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/s/WEBLIB_IS_AW.ISCRIPT1.FieldFormula.IScript_AssemblePage?AWGroupID=TFP_HELP&AWPageID=TFP_HELP&AWObjName=TFP_HELP_LPG'},
{value:'Meal Plan', label:'Meal Plan', desc:'Change meal plan', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_SS_STDNT_MLPLN.GBL?pslnkid=TFP_SS_MEAL_PLAN'},
{value:'Class Search', label:'Class Search', desc:'Search for a class', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL'},
{value:'Home', label:'Home', desc:'Search for a class', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/h/?tab=DEFAULT&pt_fname=TFP_STUDENT_HOME_FLDR&FolderPath=PORTAL_ROOT_OBJECT.TFP_H_FLDR.TFP_STUDENT_HOME_FLDR&IsFolder=true'},
{value:'Shopping Cart', label:'Shopping Cart', desc:'Go to my Shopping Cart', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL'},
{value:'Planner', label:'Planner', desc:'Go to my Planner', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL'},
{value:'Drop a Class', label:'Drop a Class', desc:'Go to drop form', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_DROP.GBL'},
{value:'Enroll', label:'Enroll', desc:'Enroll in classes', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL'},
{value:'Advisement Report', label:'Advisement Report', desc:'View Advisement Report', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_DPR_ADB.GBL'},
{value:'What-If', label:'What-If', desc:'View What-If Scenario', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_WHATIF_SEL.GBL'},
{value:'Enrollment Info', label:'Enrollment Info', desc:'View enrollment dates', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_APPT.GBL'},
{value:'Swap', label:'Swap', desc:'Swap classes', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_SWAP.GBL'},
{value:'Edit Enrollment', label:'Edit Enrollment', desc:'Edit enrolled classes', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_EDIT.GBL'},
{value:'Account Activity', label:'Account Activity', desc:'View activity in your tuition', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSF_SS_ACCT_ACTVTY.GBL'},
{value:'Unofficial Transcript', label:'Unofficial Transcript', desc:'Request an Unofficial Transcript', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_TSRQST_UNOFF.GBL'},
{value:'Official Transcript', label:'Official Transcript', desc:'Request an Official Transcript', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_TSRQST_OFF.GBL'},
{value:'Transcript History', label:'Transcript History', desc:'View transcript request history', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SR_CUSTOM.TFS_SSR_TSRQ_OFF.GBL'},
{value:'Enrollment Verification', label:'Enrollment Verification', desc:'Request Enrollment Verification', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SS_ENRL_VER_REQ.GBL'},
{value:'Leave of Absence', label:'Leave of Absence', desc:'Request a Leave of Absence', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SR_CUSTOM.TFS_SS_LOA_REQ.GBL'},
{value:'Transfer of Credit', label:'Transfer of Credit', desc:'Request a Transfer of Credit', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SR_CUSTOM.TFS_SS_TOC_INQ.GBL'},
{value:'Apply for Graduation', label:'Apply for Graduation', desc:'Apply for Graduation', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_GRAD_APPLY.GBL'},
{value:'Refund', label:'Refund', desc:'Request a Refund', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_SS_REFUND_SEL.GBL'},
{value:'Waive Health Insurance', label:'Waive Health Insurance', desc:'Waive Health Insurance', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_WAIVER1.GBL'},
{value:'Title IV Authorization', label:'Title IV Authorization', desc:'Title IV Authorization', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSF_SS_PERM_VIEW.GBL'},
{value:'Invited Viewer Access', label:'Invited Viewer Access', desc:'Invited Viewer Access', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/s/WEBLIB_IS_AW.ISCRIPT1.FieldFormula.IScript_AssemblePage?AWGroupID=TFP_INVITED_VIEWER_ACCESS&AWPageID=TFP_INVITED_VIEWER_ACCESS&AWObjName=TFP_INVITED_VIEWER_ACCESS_LPG'}

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
