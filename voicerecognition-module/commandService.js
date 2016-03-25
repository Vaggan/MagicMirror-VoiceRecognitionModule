var commandService =  {
	sonosApiBase: 'http://localhost:5005/'
}

commandService.PlayPause = function(room){
	var zone = '';

	switch(room) {
    case 'köket':
        zone = 'war room';
        break;
    case 'vardagsrummet':
        zone = 'living room';
        break;
    case 'sovrummet':
        zone = 'bedroom';
        break;
    default:
        zone = '';
        break;
	}

	//console.log('rum: ' + zone);
	
	if(zone != ''){
		$.ajax({
			type: 'GET',
			url: sonosModule.apiBase + zone +'/playpause',
			dataType: 'json',
			data: '',
			success: function (data) {
				//console.log('Ja');
				//console.log(data);
			}.bind(this),
			error: function () {
				//console.log('Nej');
			}
		});
	}
}

commandService.Volume = function(room, value){
	var zone = '';

	switch(room) {
	    case 'köket':
	        zone = 'war room';
	        break;
	    case 'vardagsrummet':
	        zone = 'living room';
	        break;
	    case 'sovrummet':
	        zone = 'bedroom';
	        break;
	    default:
	        zone = '';
	        break;
	}

	//console.log('zone: ' + zone);

	var volume = '';

	switch(value) {
	    case 'up':
	        volume = '+10';
	        break;
	    case 'down':
	        volume = '-10';
	        break;
	    default:
	        volume = value;
	        break;
	}

	//console.log('volume: ' + volume)

	if(zone != ''){
		$.ajax({
			type: 'GET',
			url: sonosModule.apiBase + zone + '/volume/' + volume,
			dataType: 'json',
			data: '',
			success: function (data) {
				// console.log('Ja');
				//console.log(data);
			}.bind(this),
			error: function () {
				// console.log('Nej');
			}
		});
	}
}

commandService.Stop = function(){
	$.ajax({
		type: 'GET',
		url: sonosModule.apiBase + 'pauseall',
		dataType: 'json',
		data: '',
		success: function (data) {
			// console.log('Ja');
			//console.log(data);
		}.bind(this),
		error: function () {
			// console.log('Nej');
		}
	});
}

commandService.Start = function(){
	$.ajax({
		type: 'GET',
		url: sonosModule.apiBase + 'resumeall',
		dataType: 'json',
		data: '',
		success: function (data) {
			// console.log('Ja');
			//console.log(data);
		}.bind(this),
		error: function () {
			// console.log('Nej');
		}
	});
}

commandService.Say = function(room, message){
	var zone = '';

	switch(room) {
	    case 'köket':
	        zone = 'war room';
	        break;
	    case 'vardagsrummet':
	        zone = 'living room';
	        break;
	    case 'sovrummet':
	        zone = 'bedroom';
	        break;
	    default:
	        zone = '';
	        break;
	}

	if(zone != ''){
		$.ajax({
			type: 'GET',
			url: sonosModule.apiBase + zone + '/say/' + message + '/sv-se',
			dataType: 'json',
			data: '',
			success: function (data) {
				// console.log('Ja');
				//console.log(data);
			}.bind(this),
			error: function () {
				// console.log('Nej');
			}
		});
	}
}