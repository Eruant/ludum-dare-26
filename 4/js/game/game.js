define(['menu', 'play', 'credits', 'instructions', 'options', 'audio'], function (menu, play, credits, instructions, options, audio) {

	var game = {};

	// paramaters
	game.screen = document.body;
	game.width = game.screen.offsetWidth;
	game.height = game.screen.offsetHeight;
	game.options = {
		fonts: {
			'main': {
				font: "normal 30px 'Poiret One', Arial"
			},
			'sub': {
				font: "normal 20px 'Poiret One', Arial"
			}
		},
		colors: {
				'main' : 'rgb(50,50,50)',
				'highlight' : 'rgb(100,100,100)'
		},
		menus: [
			{ label:"New Game", func:play },
			{ label:"Continue", func:play },
			{ label:"Instructions", func:instructions },
			/*{ label:"Options", func:options },*/
			{ label:"Credits", func:credits }
		]
	};
	game.starttime = window.mozAnimationStartTime || Date.now();
	game.laststep = game.startTime;
	game.scene = false;

	game.canvas = document.createElement('canvas');
	game.canvas.width = game.width;
	game.canvas.height = game.height;
	game.ctx = game.canvas.getContext('2d');
	game.screen.appendChild(game.canvas);

	// functions
	window.raf = (function() {
		return  window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	window.onclick = function(e) {

		var el = game.canvas,
			offsetX = 0,
			offsetY = 0,
			mx, my;

		if(el.offsetParent !== undefined) {
			do {
				offsetX += el.offsetLeft;
				offsetY += el.offsetTop;
			} while(el = el.offsetParent)
		}

		mx = e.pageX - offsetX;
		my = e.pageY - offsetY;

		if(mx > -1 && mx < game.width && my > -1 && my < game.height) {
			if(game.scene) {
				game.scene.click({ x:mx, y:my });
			} else {
				menu.click({ x:mx, y:my});
			}

			if(mx < 60 && my < 60) {
				audio.muteToggle();
			}
		}
	};

	game.step = function(timestamp) {
		var progress = timestamp - game.starttime
			steptime = timestamp - game.laststep;
		game.laststep = timestamp;

		// clear the canvas
		game.canvas.width = game.width;

		if(game.scene) {
			var s = game.scene;
			s.update(steptime, progress);
			s.draw();
			game.ctx.drawImage(s.canvas, 0, 0);
		} else {
			menu.update(steptime, progress);
			menu.draw();
			game.ctx.drawImage(menu.canvas, 0, 0);
			game.ctx.drawImage(audio.canvas, 30, 30);
		}

		window.raf(game.step);
	};

	game.init = function() {
		menu.init(game);
		play.init(game);
		credits.init(game);
		instructions.init(game);
		//options.init(game);

		// kick of the animations
		window.raf(game.step);
	};

	return game;
});
