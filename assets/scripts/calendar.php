<?php

function insert_calendar($room_id, $nameoffile) {

// to be filled out each time

$htmlnum = '10180'; 
$anchorname = 'calendar';

// ---------- nothing below needs to be edited -----------------------

// if the year has already been defined...
if (isset($_GET["cur_year"])) {
	$current_year = $_GET["cur_year"]; 	// determine year to manipulate
	$display_year = $_GET["cur_year"]; 	// determine year to display in table
}
// if the year has not already been defined
else {
	$current_year = date('Y');				// determine year to manipulate
	$display_year = $current_year;		//	determine year to display in table
}

$back_year = $current_year - 1;		// determine previous year for link
$forward_year = $current_year + 1;	// determine following year for link

// if the month has already been defined...
if (isset($_GET["cur_month"])) {
	$current_month = $_GET["cur_month"];	// determine month to manipulate
	$display_month = $_GET["cur_month"];	// determine month to display in table
}
// if the month has NOT already been defined...
else {
	$current_month = date('n') - 1; 	// determine month to manipulate
	$display_month = date('n') - 1;		// determine month to display in calendar
}

// if the month is January
if ($current_month == '0') {			
	$dates_backyear = "cur_year=" . $back_year . "&cur_month=0"; // << year goes back, month stays the same
	$dates_backmon = "cur_year=" . $back_year . "&cur_month=11"; // < year goes back, month goes back
	$dates_formon = "cur_year=" . $current_year . "&cur_month=1"; // > year stays the same, month goes forward
	$dates_foryear = "cur_year=" . $forward_year . "&cur_month=" . $current_month; // >> year goes forward, month stays the same
}

// if the month is December
elseif ($current_month == '11') {		
	$dates_backyear = "cur_year=" . $back_year . "&cur_month=11"; // << year goes back one, month stays the same
	$dates_backmon = "cur_year=" . $current_year . "&cur_month=10"; // < year stays the same, month goes back
	$dates_formon = "cur_year=" . $forward_year . "&cur_month=0"; // > year moves forward one, month moves forward one
	$dates_foryear = "cur_year=" . $forward_year . "&cur_month=11"; // >> year moves forward one, month stays the same 
}

// if the month is neither above
else {
	$dates_backyear = "cur_year=" . $back_year . "&cur_month=" . $current_month; // << year goes back one, month stays the same
	$current_month = $current_month - 1;
	$dates_backmon = "cur_year=" . $current_year . "&cur_month=" . $current_month; // < year stays the same, month goes back
	$current_month = $current_month + 2;
	$dates_formon = "cur_year=" . $current_year . "&cur_month=" . $current_month; // > year moves forward one, month moves forward one
	$current_month = $current_month - 1;
	$dates_foryear = "cur_year=" . $forward_year . "&cur_month=" . $current_month; // >> year moves forward one, month stays the same 
}

// pull in calendar from BBCanada.com
$filename = "http://www.bbcanada.com/bb_calendar_noframes.cfm?month=" . $display_month . "&direc=nxt&year=" . $display_year . "&htmlnum=" . $htmlnum . "&room_id=" . $room_id . "&instructions=0&fullheadersoff=1";

// put html file into array
$lines = file($filename);

// replace BBCanada links with links that will stay on custom page
$replace_link[0] = "<a href='" . $nameoffile . "?" . $dates_backyear . "#" . $anchorname ."' class='arrows'>&lt;&lt;</a>";
$replace_link[1] = "<a href='" . $nameoffile . "?" . $dates_backmon . "#" . $anchorname ."' class='arrows'>&lt;</a>";
$replace_link[2] = "<a href='" . $nameoffile . "?" . $dates_formon . "#" . $anchorname ."' class='arrows'>&gt;</a>";
$replace_link[3] = "<a href='" . $nameoffile . "?" . $dates_foryear . "#" . $anchorname ."' class='arrows'>&gt;&gt;</a>";

$i = 0;

foreach ($lines as $key => $value) {
	if (stristr($lines[$key], 'href')) {
		$lines[$key] = $replace_link[$i];
		$i++;
	}
}
// format tables

// stick array into one long string

$calendarfile = implode(" ", $lines);

// get rid of table borders

$calendarfile = str_replace('border="1"', 'border="0" align="center"', $calendarfile);

// add classes to replace the background colours
 
$calendarfile = str_replace('bgcolor="#c0c0EF"', ' class="unavailable"', $calendarfile);
$calendarfile = str_replace('bgcolor="#F4F2EE"', ' class="available"', $calendarfile);
$calendarfile = str_replace('bgcolor="#F0EEE8"', 'class="available"', $calendarfile);
$calendarfile = str_replace('bgcolor="#EBE8DE"', 'bgcolor="#CECDAF"', $calendarfile);

// remove all the font tags
$calendarfile = str_replace ('<font color="#000000" size="2">', '', $calendarfile);
$calendarfile = str_replace ('<FONT size="3" face="helvetica,arial">', '', $calendarfile);
$calendarfile = str_replace ('<FONT COLOR="BLACK">', '', $calendarfile);
$calendarfile = str_replace ('<FONT face="arial,helvetica">', '', $calendarfile);
$calendarfile = str_replace ('</font>', '', $calendarfile);


// display calendar

echo $calendarfile;

}

?>
