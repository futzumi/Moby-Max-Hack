$(document).ready(function(){
	$(".lab-menu-clock").click(function() {
		updateClockValues();	
	});
});

function updateClockValues()
{
	var actual;
	var focused;
  let hacked_time = prompt("How much Time?");
	if ( typeof(focusTimeObj) == 'object' )
	{
		actual = hacked_time;
		if ($("#focused_value").length)
			focused = hacked_time;
	} else {
		actual = hacked_time;
	}

	$("#actual_value").text(hacked_time)

	if ($("#focused_value").length)
		$("#focused_value").text(hacked_time);
}

function formatClockValue(totalSec)
{
	var minutes = parseInt( totalSec / 60 );

	return (minutes + " min");
}
