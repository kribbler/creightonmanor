<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Captain's Quarters</title></title>
<link href="../css/calendar.css" rel="stylesheet" type="text/css">
<?php 
	include ("../scripts/calendar.php");
?>
<SCRIPT language=JavaScript>
<!--
function closeWindow()	{
	parent.window.close()
}
-->
</SCRIPT>
</head>

<body>
<?php insert_calendar('18735', 'captains_cal.php'); ?>
<A href="javascript:closeWindow()" class="closewindow">CLOSE WINDOW</a>
</body>
</html>
