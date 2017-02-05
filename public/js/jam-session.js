$(document).ready(function() {

	var socket = io();
	var piano = Synth.createInstrument('piano');

	function keyboardInput(key) {
		switch (key) {
			case 97: // a
				$("[data-key='C-3']").click();
				break;
			case 119: // w
				$("[data-key='C#-3']").click();
				break;
			case 115: // s
				$("[data-key='D-3']").click();
				break;
			case 101: // e
				$("[data-key='D#-3']").click();
				break;
			case 100: // d
				$("[data-key='E-3']").click();
				break;
			case 102: // f
				$("[data-key='F-3']").click();
				break;
			case 116: // t
				$("[data-key='F#-3']").click();
				break;
			case 103: // g
				$("[data-key='G-3']").click();
				break;
			case 121: // y
				$("[data-key='G#-3']").click();
				break;
			case 104: // h
				$("[data-key='A-3']").click();
				break;
			case 117: // u
				$("[data-key='A#-3']").click();
				break;
			case 106: // j
				$("[data-key='B-3']").click();
				break;
			case 107: // k
	
				$("[data-key='C-4']").click();
				break;
			case 111: // o
				$("[data-key='C#-4']").click();
				break;
			case 108: // l
				$("[data-key='D-4']").click();
				break;
			case 112: // p
				$("[data-key='D#-4']").click();
				break;
			case 59: // ;
				$("[data-key='E-4']").click();
				break;
			case 39: // '
				$("[data-key='F-4']").click();
				break;
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


});