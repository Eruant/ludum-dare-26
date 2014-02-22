define(function(){

	var audio = {};

	audio.mute = false;

	audio.click = new Audio('place_tile.wav');
	audio.explode = new Audio('explode_tile.wav');
	audio.bg = new Audio('ld26.ogg');
	
	audio.bg.volume = 0.2;
	audio.bg.play();

	audio.bg.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	audio.muteToggle = function() {
		audio.mute = (audio.mute) ? false : true;
		audio.click.muted = audio.mute;
		audio.explode.muted = audio.mute;
		audio.bg.muted = audio.mute;
		audio.draw();
	};

	audio.draw = function() {
		var ctx = audio.ctx;

		audio.canvas.width = 30;

		ctx.fillStyle = '#000';

		ctx.beginPath();
		ctx.moveTo(13,4);
		ctx.lineTo(22,7);
		ctx.lineTo(22,9);
		ctx.lineTo(13,6);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(13,4);
		ctx.lineTo(16,24);
		ctx.lineTo(18,24);
		ctx.lineTo(14, 5);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.arc(14, 23, 4, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();

		if(audio.mute) {
			ctx.fillStyle = '#ff3333';
			ctx.beginPath();
			ctx.moveTo(3,28);
			ctx.lineTo(14,15);
			ctx.lineTo(25,0);
			ctx.lineTo(27,2);
			ctx.lineTo(15,15);
			ctx.lineTo(5,28);
			ctx.closePath();
			ctx.fill();
		}
	};

	audio.canvas = document.createElement('canvas');
	audio.canvas.width = 30;
	audio.canvas.height = 30;
	audio.ctx = audio.canvas.getContext('2d');
	audio.draw();

	return audio;
});
