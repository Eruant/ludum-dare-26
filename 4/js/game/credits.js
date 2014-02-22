define(function() {

	var credits = {};

	credits.click = function(params) {
		credits.game.scene = false;
	};

	credits.update = function(steptime, progress) {
	};

	credits.draw = function() {
		if(credits.redraw) {

			var ctx = credits.ctx,
				g = credits.game;

			credits.canvas.width = g.width;

			//ctx.fillStyle = '#fff';
			//ctx.fillRect(0,0,g.width,g.height);

			ctx.fillStyle = g.options.colors.main;
			ctx.textBaseline = 'top';
			ctx.textAlign = 'right';
			
			ctx.font = g.options.fonts.main.font;
			ctx.fillText('Credits', g.width - 30, 30);

			ctx.font = g.options.fonts.sub.font;
			ctx.fillText('Created by Matt Gale', g.width - 30, 80);
			ctx.fillText('for Ludum Dare 26', g.width - 30, 105);
			ctx.fillText('Code: HMTL, JavaScript, CSS', g.width - 30, 155);
			ctx.fillText('External libraries: require.js', g.width - 30, 180);

		}
	};

	credits.init = function(app){
		credits.game = app;
		
		credits.canvas = document.createElement('canvas');
		credits.canvas.width = app.width;
		credits.canvas.height = app.height;
		credits.ctx = app.canvas.getContext('2d');
		credits.redraw = true;
	};

	return credits;
});
