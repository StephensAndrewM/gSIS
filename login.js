(function() {

	if (window.location.href.indexOf("PAPP_GUEST") === -1) { return; }

	$('html').css({ height:'100%' });
	$('body').addClass('login-page');

	$('body').append('<div id="gsis_login_form"></div>');
	$('body').append('<div id="gsis_login_logo">gSIS</div>');
	$('#gsis_login_form').html($('#login').html());

	$('body').append('<div id="gsis_about"></div>');

	var welcome = '<h3>What is it?</h3>';
	welcome += '<p>gSIS is a Chrome extension that makes improves the functionality and interface of Tufts iSIS. This extension aims to make the user experience better for the most commonly used functionality present in the system.</p>';

	welcome += '<h3>Features:</h3>';
	welcome += '<ul><li>Reorganized Menus</li><li>Search for All Functionality (where to find the hidden and buried pages)</li><li>Easy-to-Access Schedule and Waitlist Status</li><li>Better Class Search</li><li>Improved Interface for Browsing Classes</li>';

	welcome += '<h3>How does it work?</h3>';
	welcome += '<p>Chrome Extensions let developers customize what gets displayed to the user. That’s how we can make things prettier and add/remove certain parts of each page. We can’t control how iSIS communicates with its servers, which is why we can only re-style the existing data.</p>';

	welcome += '<h3>Is it secure?</h3>';
	welcome += '<p>Yes.</p>';

	welcome += '<h3>Really?</h3>';
	welcome += '<p>As secure as standard iSIS is*. We don’t store, collect, or see any of your personal data. There is no third-party server involved. All of the processing is done in your browser. Still not convinced? Browse the source code on Github. You might see some janky code, but nothing malicious.</p>';

	welcome += '<h3>About the Project</h3>';
	welcome += '<p>gSIS began at TuftsHack, Spring 2014. The initial prototype was built in a 21-hour marathon by Andrew Stephens, Colin Watts, and Ben Lewin. The project went on to win Best Tufts Tool at the hackathon. The extension was released to the public on March XXXX.</p>';

	welcome += '<p>Have a suggestion? Found a bug? Want to say hi? Contact us at tuftsgsis@gmail.com</p>';

	welcome += '<h3>Disclaimer</h3>';

	welcome += '<p>PUT THE DISCLAIMER HERE</p>'

	welcome += '<p class="small">*Fun Fact: iSIS embeds Google Analytics on each of its interior pages, meaning all of your personal data is shared with Google each time you access a page. Does that make you feel safer? :)</p>';

	$('#gsis_about').html(welcome);

	//console.log('login form js');

	// Remove Annoying Auto-Capitalize
	//document.getElementById('userid').onblur = null;
	//console.log(document.getElementById('userid').onblur);

})();