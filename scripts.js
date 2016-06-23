$(function() {

	$('#input-button').on('click', function() {

		$.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', function(data) {
	   	var sum = ' '
	   	for(var i = 0; i <data.length; i++){
	   		console.log(data[i])
	   		sum += data[i].name + '<BR><BR>'
	   	}
	   	$('#container').html(sum);
	   });

	})

})





