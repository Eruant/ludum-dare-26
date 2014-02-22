define(['players'], function(players) {

	var atoms = {};

	atoms.update = function(steptime, progress, level){
		atoms.level = level;
		atoms.rotation += 0.1;
	};

	atoms.draw = function(){
		var ctx = atoms.ctx,
			lvl = atoms.level,
			scale = lvl.scale
			i = 0,
			l = lvl.nodes.length,
			pi2 = 2 * Math.PI;
		
		ctx.save();
		ctx.translate(
			(atoms.game.width / 2) + (lvl.x * scale),
			(atoms.game.height / 2) + (lvl.y * scale)
		);

		while(i<l) {

			var n = lvl.nodes[i];

			if(n.player !== false) {
			
				ctx.save();
				ctx.translate(n.x * scale, n.y * scale);
				ctx.rotate(atoms.rotation + n.id );

				ctx.strokeStyle = '#000';
				ctx.fillStyle = players[n.player].color;
				
				switch(n.pieces) {
					case(0): {
						break;
					}
					case(1): {
						ctx.fillStyle = 'rgba(255,255,255,0.3)';
						ctx.beginPath();
						ctx.arc(-1, -2, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						break;
					}
					case(2): {
						ctx.fillStyle = 'rgba(255,255,255,0.5)';
						ctx.beginPath();
						ctx.arc(-4, 0, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(4, 0, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						break;
					}
					case(3): {
						ctx.fillStyle = 'rgba(255,255,255,0.7)';
						ctx.beginPath();
						ctx.arc(0, 6, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(4, -4, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-4, -4, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						break;
					}
					case(4): {
						ctx.fillStyle = 'rgba(255,255,255,0.8)';
						ctx.beginPath();
						ctx.arc(-5, 5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(5, 5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(5, -5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-5, -5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						break;
					}
					case(5): {
						ctx.fillStyle = 'rgba(255,255,255,0.9)';
						ctx.beginPath();
						ctx.arc(0, -6, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(7, -4, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-7, -4, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-4, 7, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(4, 7, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						break;
					}
					case(6): {
						ctx.fillStyle = 'rgba(255,255,255,1)';
						ctx.beginPath();
						ctx.arc(0, -10, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(0, 10, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(10, -5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-10, -5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(10, 5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-10, 5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();


						break;
					}
					default: {
						ctx.fillStyle = 'rgba(255,255,255,1)';
						ctx.beginPath();
						ctx.arc(0, -10, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(0, 10, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(10, -5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-10, -5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(10, 5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-10, 5, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						ctx.beginPath();
						ctx.arc(-1, -2, 5 * scale, 0, pi2, false);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();

						break;
					}
				}

				ctx.restore();

			}

			i++;
		}

		ctx.restore();
	};

	atoms.init = function(app){
		atoms.game = app;

		atoms.canvas = document.createElement('canvas');
		atoms.canvas.width = app.width;
		atoms.canvas.height = app.height;
		atoms.ctx = app.canvas.getContext('2d');

		atoms.list = [];
		atoms.rotation = 0;
	};

	return atoms;
});
