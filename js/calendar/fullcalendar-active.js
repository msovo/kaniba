$(function() {

	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true,
		backgroundColor: '#1f2e86',   
		eventTextColor: '#1f2e86',
		textColor: '#378006',
		dayClick: function(date, jsEvent, view) {

        alert('Clicked on: ' + date.format());

        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('background-color', 'red');

    },
		events: createCalenderEvent(),
		eventClick:function(event){
			BookingDetails(event.id,)
		}
	});
});


function createCalenderEvent(){

	var data=JSON.parse( sessionStorage.getItem("bookings"))["Dt"]
	var events=[]
	for(var i=0;i<data.length;i++){
		var Levents={}
		
		Levents["title"]=data[i].RouteCode
		Levents["start"]=data[i]["Check in date"]
	
		Levents["color"]=createColorFirStatuys(data[i].Status)
		Levents["id"]=i
		events.push(Levents)
	}
	return events
}