define(function() {

	var menu = {};

	menu.init = function(app) {

		var i,l;

		menu.width = app.width || 600;
		menu.height = app.height || 400;
		menu.options = app.options || []
		menu.game = app;
		menu.changescene = false;

		menu.triggers = [];
		i = 0;
		l = app.options.menus.length;
		while(i<l) {
			menu.triggers.push({
				func: app.options.menus[i].func,
				label: app.options.menus[i].label,
				x: menu.width - 225,
				y: i*40 + 25,
				width: 200,
				height: 35
			});
			i++;
		}

		menu.canvas = document.createElement('canvas');
		menu.canvas.width = menu.width;
		menu.canvas.height = menu.height;
		menu.ctx = menu.canvas.getContext('2d');
		menu.updated = true;
	};

	// give the text a chance to load
	// TODO figure out how to do this onload of font
	setTimeout((function(){
		menu.updated = true;
	}), 1000);
	setTimeout((function(){
		menu.updated = true;
	}), 500);

	menu.update = function(steptime, progress) {
	};

	menu.click = function(params) {

		var i = 0,
			l = menu.triggers.length;

		while(i<l) {
			var t = menu.triggers[i];
			if(params.x > t.x && params.x < t.x+t.width && params.y > t.y && params.y < t.y+t.height) {
				menu.updated = true;
				menu.game.scene = t.func;
				if(t.label === "New Game") {
					t.func.init(menu.game);
				}
				break;
			}
			i++;
		}
	};

	menu.draw = function(){
		if(menu.updated) {
			var ctx = menu.ctx,
				i = 0,
				l = 0,
				margin = 30,
				textRight = menu.width - margin;

			// clear the screen
			menu.canvas.width = menu.width;

			// draw background
			//ctx.fillStyle = 'rgba(255, 255, 255, 1)';
			//ctx.fillRect(0, 0, menu.width, menu.height);

			// draw the items
			i = 0;
			l = menu.options.menus.length;
			ctx.fillStyle = menu.options.colors.main;
			ctx.textBaseline = 'top';
			ctx.textAlign = 'right';
			ctx.font = menu.options.fonts.main.font;
			while(i<l) {
				ctx.fillText(menu.options.menus[i].label, textRight, (40 * i) + margin);
				i++;
			}

			menu.updated = false;

			if(window.debug) {
				// draw the menu triggers
				i = 0;
				l = menu.triggers.length;
				ctx.fillStyle = 'rgba(0,0,255, 0.5)';
				while(i<l) {
					var t = menu.triggers[i];
					ctx.fillRect(t.x, t.y, t.width, t.height);
					i++;
				}
			}
		}

	};

	return menu;

});
