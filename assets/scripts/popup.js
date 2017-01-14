// JavaScript Document

	var websitewindow = null;
	var urls = new Array(0);
	var calendar = new Array(0);
	// initVar();

function availability(index) {
	calendar[0] = "assets/calendars/captains_cal.php";
	calendar[1] = "assets/calendars/ogdens_cal.php";
	calendar[2] = "assets/calendars/violets_cal.php";
	websiteWindow = window.open(calendar[index],'nextpage','toolbar=no,scrollbars=yes,location=no,width=300,height=350');
}
