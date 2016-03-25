if (annyang) {
	//Set language
	annyang.setLanguage('sv-SE');
	// Let's define a command.
	var commands = {
		'Hej': function() { alert('Hej!'); },
		'Jag heter :name': function(name) { alert('Hej, ' + name + '!'); },
		'Stoppa (musiken) i :room': function(room) { commandService.PlayPause(room); },
		'Starta (musiken) i :room': function(room) { commandService.PlayPause(room); },
		'Höj (volymen) i :room': function(room) { commandService.Volume(room, 'up'); },
		'Sänk (volymen) i :room': function(room) { commandService.Volume(room, 'down'); },
		'(Sätt) volymen i :room till :value': function(room, value) { commandService.Volume(room, value); },
		'Stoppa (all) musik': function() { commandService.Stop(); },
		'Stoppa musiken': function() { commandService.Stop(); },
		'Starta (all) musik': function() { commandService.Start(); },
		'Starta musiken': function() { commandService.Start(); },
		'Meddela :room (att) *message': function(room, message) { commandService.Say(room, message); },
	};

	// Add our commands to annyang
	annyang.addCommands(commands);

	annyang.addCallback('resultNoMatch', function(userSaid, commandText, phrases) {
		// console.log(userSaid); // sample output: 'hello'
		// console.log(commandText); // sample output: 'hello (there)'
		// console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
	});

	annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
		// console.log(userSaid); // sample output: 'hello'
		// console.log(commandText); // sample output: 'hello (there)'
		// console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
	});
	// Start listening.
	annyang.start();
}