define(['levels'], function(levels){

	var explosions = {};

	explosions.add = function(params) {
		explosions.animations.push(params);
	};

	explosions.update = function(steptime, progress) {
		if(explosions.busy === true) {
			var i = 0,
				l = explosions.animations.length;
			
			while(i<l) {
				var e = explosions.animations[i];

				e.x += (e.dx - e.sx) / 10;
				e.y += (e.dy - e.sy) / 10;

				e.frame += steptime;

				if(e.frame >= e.time) {
					explosions.remove.push(i);
				}

				i++;
			}

			i = 0;
			l = explosions.remove.length;
			while(i<l) {
				explosions.animations.splice(i,1);
				i++;
			}
			explosions.remove = [];

			// if animation is finished
			if(explosions.animations.length === 0) {
				explosions.busy = false;
			}
		}
	};

	explosions.draw = function() {
		var ctx = explosions.ctx,
				i = 0,
				l = explosions.animations.length,
				pi2 = 2 * Math.PI;

		ctx.save();
		while(i<l) {
			var e = explosions.animations[i];

			ctx.fillStyle = 'rgba(255,255,255,0.8)';
			ctx.beginPath();
			ctx.arc(e.x, e.y, 5, 0, pi2, false);
			ctx.closePath();
			ctx.fill();
			i++;
		}
		ctx.restore();
	};

	explosions.init = function(app) {
		explosions.game = app;

		explosions.canvas = document.createElement('canvas');
		explosions.canvas.width = app.width;
		explosions.canvas.height = app.height;
		explosions.ctx = app.canvas.getContext('2d');

		explosions.busy = false;
		explosions.animations = [];
		explosions.remove = [];
	};

	return explosions;
});
