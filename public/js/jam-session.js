$(document).ready(function() {

	var socket = io();
	var piano = Synth.createInstrument('piano');

	function keyboardInput(key) {

		var note;

		switch (key) {
			case 97: // a
				note = $("[data-key='C-3']");
				break;
			case 119: // w
				note = $("[data-key='C#-3']");
				break;
			case 115: // s
				note = $("[data-key='D-3']");
				break;
			case 101: // e
				note = $("[data-key='D#-3']");
				break;
			case 100: // d
				note = $("[data-key='E-3']");
				break;
			case 102: // f
				note = $("[data-key='F-3']");
				break;
			case 116: // t
				note = $("[data-key='F#-3']");
				break;
			case 103: // g
				note = $("[data-key='G-3']");
				break;
			case 121: // y
				note = $("[data-key='G#-3']");
				break;
			case 104: // h
				note = $("[data-key='A-3']");
				break;
			case 117: // u
				note = $("[data-key='A#-3']");
				break;
			case 106: // j
				note = $("[data-key='B-3']");
				break;
			case 107: // k
				note = $("[data-key='C-4']");
				break;
			case 111: // o
				note = $("[data-key='C#-4']");
				break;
			case 108: // l
				note = $("[data-key='D-4']");
				break;
			case 112: // p
				note = $("[data-key='D#-4']");
				break;
			case 59: // ;
				note = $("[data-key='E-4']");
				break;
			case 39: // '
				note = $("[data-key='F-4']");
				break;
		}

		if (note) {
			note.click();
			note.addClass('active');

			setTimeout(function() {
				note.removeClass('active');
			}, 100);
		}

	}

  	socket.on('piano-key', function(data){
	    piano.play(data.note[0], data.note[1], 2.5);
	});

	$("#piano .key").click(function(event) {
		var note = $(this).attr('data-key').split('-');
		socket.emit('piano-key', { note: note });
	});

	$("body").keypress(function(event) {
		keyboardInput(event.which);
	});
	
});
