define(function() {

	var instructions = {};

	instructions.list = [
		'Click on a tile to add a piece.',
		'If you add more pieces than a tile can hold, it will explode.',
		'exploding tiles shower the surrounding tiles with it\'s peices.',
		'Wipe out the other players to win!'
	];

	instructions.click = function(params) {
		instructions.game.scene = false;
	};

	instructions.update = function(steptime, progress) {
	};

	instructions.draw = function() {
		if(instructions.redraw) {

			var ctx = instructions.ctx,
				g = instructions.game,
				i = 0,
				l = instructions.list.length,
				y = 80;

			instructions.canvas.width = g.width;

			//ctx.fillStyle = '#fff';
			//ctx.fillRect(0,0,g.width,g.height);

			ctx.fillStyle = g.options.colors.main;
			ctx.textBaseline = 'top';
			ctx.textAlign = 'right';
			
			ctx.font = g.options.fonts.main.font;
			ctx.fillText('Instructions', g.width - 30, 30);

			ctx.font = g.options.fonts.sub.font;
			while(i<l) {
				ctx.fillText(instructions.list[i], g.width - 30, y);
				y += 25;
				i++;
			}

		}
	};

	instructions.init = function(app){
		instructions.game = app;
		
		instructions.canvas = document.createElement('canvas');
		instructions.canvas.width = app.width;
		instructions.canvas.height = app.height;
		instructions.ctx = app.canvas.getContext('2d');
		instructions.redraw = true;
	};

	return instructions;
});

