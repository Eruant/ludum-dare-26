define(['players'], function(players){

	var options = {};

	options.click = function(params) {
		options.game.scene = false;
	};

	options.update = function(steptime, progress) {
	};

	options.draw = function() {
		if(options.redraw) {

			var ctx = options.ctx,
				g = options.game,
				y = 80;

			options.canvas.width = g.width;

			ctx.fillStyle = g.options.colors.main;
			ctx.textBaseline = 'top';
			ctx.textAlign = 'right';
			
			ctx.font = g.options.fonts.main.font;
			ctx.fillText('Options', g.width - 30, 30);

			ctx.font = g.options.fonts.sub.font;

		}
	};

	options.getUrlVars = function() {
		var vars = [],
			hash,
			names = [],
			colors = []
			hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'),
			i = 0,
			l = hashes.length;

		while(i<l) {
			hash = hashes[i].split('=');
			if(hash[0].match(/^name/)) {
				names.push(hash[1]);
			}
			if(hash[0].match(/^color/)) {
				colors.push(hash[1]);
			}
			i++;
		}

		if(names.length === colors.length) {
			i = 0;
			l = names.length;
			while(i<l) {
				vars.push({
					name: names[i],
					color: '#'+colors[i]
				});
				i++;
			}

		}

		return vars;
	};

	options.init = function(app){
		options.game = app;
		
		options.canvas = document.createElement('canvas');
		options.canvas.width = app.width;
		options.canvas.height = app.height;
		options.ctx = app.canvas.getContext('2d');
		options.redraw = true;

		players = options.getUrlVars();
		console.log(players);

	};

	return options;
});
