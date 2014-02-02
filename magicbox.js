$('#gsis_header').append('<form id="magic_form"><input id="magic_box" type="text" placeholder="Find a Feature"></form>');

var commands = [
{value:'HELP', label:'Help', desc:'View help menu', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/s/WEBLIB_IS_AW.ISCRIPT1.FieldFormula.IScript_AssemblePage?AWGroupID=TFP_HELP&AWPageID=TFP_HELP&AWObjName=TFP_HELP_LPG'},
{value:'MEAL PLAN', label:'Meal Plan', desc:'Change meal plan', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_SS_STDNT_MLPLN.GBL?pslnkid=TFP_SS_MEAL_PLAN'},
{value:'CLASS SEARCH', label:'Class Search', desc:'Search for a class', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL'},
{value:'HOME', label:'Home', desc:'Search for a class', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/h/?tab=DEFAULT&pt_fname=TFP_STUDENT_HOME_FLDR&FolderPath=PORTAL_ROOT_OBJECT.TFP_H_FLDR.TFP_STUDENT_HOME_FLDR&IsFolder=true'},
{value:'SHOPPING CART', label:'Shopping Cart', desc:'Go to my Shopping Cart', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL'},
{value:'PLANNER', label:'Planner', desc:'Go to my Planner', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL'},
{value:'DROP A CLASS', label:'Drop a Class', desc:'Go to drop form', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_DROP.GBL'},
{value:'ADD A CLASS', label:'Add a Class', desc:'Go to class search', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL'},
{value:'ENROLL', label:'Enroll', desc:'Enroll in classes', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL'},
{value:'ADVISEMENT REPORT', label:'Advisement Report', desc:'View Advisement Report', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_DPR_ADB.GBL'},
{value:'DEGREE REQUIREMENTS', label:'Degree Requirements', desc:'View Advisement Report', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_DPR_ADB.GBL'},
{value:'MAJOR REQUIREMENTS', label:'Major Requirements', desc:'View Advisement Report', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_DPR_ADB.GBL'},
{value:'WHAT-IF', label:'What-If', desc:'View What-If Scenario', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SAA_SS_WHATIF_SEL.GBL'},
{value:'ENROLLMENT INFO', label:'Enrollment Info', desc:'View enrollment dates', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_APPT.GBL'},
{value:'SWAP', label:'Swap', desc:'Swap classes', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_SWAP.GBL'},
{value:'EDIT ENROLLMENT', label:'Edit Enrollment', desc:'Edit enrolled classes', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_EDIT.GBL'},
{value:'ACCOUNT ACTIVITY', label:'Account Activity', desc:'View activity in your tuition', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSF_SS_ACCT_ACTVTY.GBL'},
{value:'UNOFFICIAL TRANSCRIPT', label:'Unofficial Transcript', desc:'Request an Unofficial Transcript', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_TSRQST_UNOFF.GBL'},
{value:'CATS', label:'Cats', desc:'Redirects to cats', url:'http://cat-bounce.com/'},
{value:'OFFICIAL TRANSCRIPT', label:'Official Transcript', desc:'Request an Official Transcript', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_TSRQST_OFF.GBL'},
{value:'TRANSCRIPT HISTORY', label:'Transcript History', desc:'View transcript request history', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SR_CUSTOM.TFS_SSR_TSRQ_OFF.GBL'},
{value:'ENROLLMENT VERIFICATION', label:'Enrollment Verification', desc:'Request Enrollment Verification', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SS_ENRL_VER_REQ.GBL'},
{value:'LEAVE OF ABSENCE', label:'Leave of Absence', desc:'Request a Leave of Absence', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SR_CUSTOM.TFS_SS_LOA_REQ.GBL'},
{value:'TRANSFER OF CREDIT', label:'Transfer of Credit', desc:'Request a Transfer of Credit', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SR_CUSTOM.TFS_SS_TOC_INQ.GBL'},
{value:'APPLY FOR GRADUATION', label:'Apply for Graduation', desc:'Apply for Graduation', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSS_GRAD_APPLY.GBL'},
{value:'REFUND', label:'Refund', desc:'Request a Refund', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_SS_REFUND_SEL.GBL'},
{value:'WAIVE HEALTH INSURANCE', label:'Waive Health Insurance', desc:'Waive Health Insurance', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/TFS_SF_CUSTOM.TFS_WAIVER1.GBL'},
{value:'TITLE IV AUTHORIZATION', label:'Title IV Authorization', desc:'Title IV Authorization', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/PSFT_SA/c/SA_LEARNER_SERVICES.SSF_SS_PERM_VIEW.GBL'},
{value:'INVITED VIEWER ACCESS', label:'Invited Viewer Access', desc:'Invited Viewer Access', url:'https://isis.uit.tufts.edu/psp/paprd/EMPLOYEE/EMPL/s/WEBLIB_IS_AW.ISCRIPT1.FieldFormula.IScript_AssemblePage?AWGroupID=TFP_INVITED_VIEWER_ACCESS&AWPageID=TFP_INVITED_VIEWER_ACCESS&AWObjName=TFP_INVITED_VIEWER_ACCESS_LPG'}

];

	var box = $( '#magic_box' ).autocomplete({
  		source: commands
	})

	if (box.data('ui-autocomplete') !== undefined) {
		box.data('ui-autocomplete')._renderItem = function( ul, item ) {
		return $( "<li>" )
			.append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
			.appendTo( ul );
		};
	}

	$('#magic_form').submit(function(){
;

		var command = $('#magic_form').find('input').val();

		for(var i=0; i<commands.length; i++) 
		{

			if(command.toUpperCase()==commands[i].value)
			{
				console.log(commands[i].url);
				window.location.replace(commands[i].url);
			}
		}
		return false;
	});
