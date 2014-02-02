(function() {

	if (window.location.href.indexOf("PAPP_GUEST") === -1) { return; }

	$('html').css({ height:'100%' });
	$('body').addClass('login-page');

	$('body').append('<div id="gsis_login_form"></div>');
	$('body').append('<div id="gsis_login_logo">gSIS</div>');
	$('#gsis_login_form').html($('#ptpgltbody_row_TFP_GUEST_SIGNIN_PG').html());

})();