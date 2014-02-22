define(['levels', 'players', 'atoms', 'explosions', 'audio'], function(levels, players, atoms, explosions, audio) {

	var play = {};

	play.collision = function(c1, c2) {
		var dx = c1.x - c2.x,
			dy = c1.y - c2.y,
			dist = c1.radius + c2.radius;
		return (dx * dx * dy * dy <= dist * dist);
	};

	play.rectCollision = function(a,b) {
		return	a.x < b.x + b.width &&
						a.x + a.width > b.x &&
						a.y < b.y + b.height &&
						a.y + a.height > b.y;
	};

	play.click = function(params) {
		var i = 0,
			l = play.triggers.length
			c1 = { x:params.x, y:params.y, width:1, height:1 };


		while(i<l) {
			var t = play.triggers[i];
			if(params.x > t.x && params.x < t.x+t.width && params.y > t.y && params.y < t.y+t.height) {
				t.func();
				break;
			}
			i++;
		}

		// loop threw each piece and see if we collide with it
		i = 0;
		l = play.currentLevel.nodes.length;
		while(i<l) {
			var n = play.currentLevel.nodes[i],
				level = play.currentLevel,
				offsetX = (play.game.width/2) + (level.x * level.scale) + 0.5,
				offsetY = (play.game.height/2) + (level.y * level.scale) + 0.5,
				c2 = {
					x:(n.x * level.scale) + offsetX - (12 * level.scale),
					y:(n.y * level.scale) + offsetY - (15 * level.scale),
					width: 24 * level.scale,
					height: 30 * level.scale
				};
			if(play.turn.winner === false && play.rectCollision(c1,c2)) {
				audio.click.play();
				if(n.player === false || n.player === play.turn.current) {
					n.player = play.turn.current;
					play.turn.last = play.turn.current;
					play.turn.current++;
					if(play.turn.current >= players.length) {
						play.turn.current = 0;
					}
					// check to see if this player can go if not they are dead
					var j = 0, skip = true;
					while(j<l) {
						var jn = play.currentLevel.nodes[j];
						if(jn.player === false || jn.player === play.turn.current) {
							skip = false;
						}
						j++;
					}
					if(skip) {
						play.turn.current++;
						if(play.turn.current >= players.length) {
							play.turn.current = 0;
						}
					}

					n.pieces++;
				}
				break;
			}
			i++;
		}

	};

	play.update = function(steptime, progress) {

		if(play.turn.winner === false) {

			// check to see if any places need to explode
			var nodes = play.currentLevel.nodes
				i = 0,
				l = nodes.length;
			
			while(i<l) {
				var n = nodes[i],
					cl = n.connections.length;

				if(n.pieces >= cl) {
					var e = 0, el = play.explosions.length, add = true;
					while(e<el) {
						if(play.explosions[e] === n.id) {
							add = false;
						}
						e++;
					}
					if(add) {
						play.explosions.push(n.id);
					}
				}

				i++;
			}

			if(play.explosions.length > 0 && explosions.busy === false) {
				var id = play.explosions[0],
					connections = nodes[id-1].connections,
					j = 0;
					cl = connections.length;

				explosions.busy = true;

				play.explosions.splice(0,1);
				
				if(nodes[id-1].pieces - cl >= 0) {
					nodes[id-1].pieces -= cl;
					while(j<cl) {
						nodes[connections[j]-1].player = nodes[id-1].player;
						nodes[connections[j]-1].pieces++;

						var scale = play.currentLevel.scale,
								w = (play.game.width / 2) + (play.currentLevel.x * scale),
								h = (play.game.height / 2) + (play.currentLevel.y * scale);


						audio.explode.play();
						// add animation
						explosions.add({
							x: (nodes[id-1].x * scale) + w,
							y: (nodes[id-1].y * scale) + h,
							sx: (nodes[id-1].x * scale) + w,
							sy: (nodes[id-1].y * scale) + h,
							dx: (nodes[connections[j]-1].x * scale) + w,
							dy: (nodes[connections[j]-1].y * scale) + h,
							frame: 1,
							time: 300,
							node: connections[j]-1,
							player: nodes[id-1].player
						});
						j++;
					}
					if(nodes[id-1].pieces === 0) {
						nodes[id-1].player = false;
					}

					// check to see if someone has one
					j = 0;
					var p = [];
					while(j<l) {
						if(p.indexOf(nodes[j].player) === -1) {
							if(nodes[j].player !== false) {
								p.push(nodes[j].player);
							}
						}
						j++;
					}
					if(p.length === 1) {
						play.turn.winner = play.turn.last;
						play.turn.current = play.turn.last;
					}
				}
			}
		}

		atoms.update(steptime, progress, play.currentLevel);
		explosions.update(steptime, progress);
	};

	play.draw = function() {
		var ctx = play.ctx,
			level = play.currentLevel,
			i, l, scale = level.scale;

		ctx.drawImage(audio.canvas, 30, 30);

		// draw the level
		ctx.save();
		ctx.translate(
				(play.game.width / 2) + (level.x * scale) + 0.5,
				(play.game.height / 2) + (level.y * scale) + 0.5
		);

		i = 0;
		l = level.nodes.length;
		while(i<l) {
			var n = level.nodes[i];

			ctx.save();
			ctx.translate(n.x * scale, n.y * scale);
			ctx.strokeStyle = '#000';
			ctx.fillStyle = (n.player !== false) ? players[n.player].color : '#fff';
			ctx.beginPath();
			ctx.moveTo(-10 * scale, 20 * scale);
			ctx.lineTo(10 * scale, 20 * scale);
			ctx.lineTo(20 * scale, 0);
			ctx.lineTo(10 * scale, -20 * scale);
			ctx.lineTo(-10 * scale, -20 * scale);
			ctx.lineTo(-20 * scale, 0);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();

			/*			
			ctx.fillStyle = (n.player !== false) ? '#fff' : '#000';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(n.id, 0, 0);
			*/
			
			ctx.restore();

			i++;
		}

		ctx.restore();

		i = 0;
		l = play.triggers.length;
		while(i<l) {
			var t = play.triggers[i];
			ctx.fillStyle = play.game.options.colors.main;
			ctx.textBaseline = 'top';
			ctx.textAlign = 'right';
			ctx.font = play.game.options.fonts.main.font;
			ctx.fillText(t.text, t.x+t.width, t.y);
			i++;
		}

		ctx.fillStyle = players[play.turn.current].color;
		ctx.strokeStle = '#000';
		ctx.beginPath();
		ctx.rect(30, play.game.height - 50, 20, 20);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.fillStyle = play.game.options.colors.main;
		ctx.textAlign = 'left';
		ctx.textBaseline = 'bottom';
		ctx.font = play.game.options.fonts.sub.font;
		if(play.turn.winner === false) {
			var txt = players[play.turn.current].name + "'s turn";
		} else {
			var txt = players[play.turn.winner].name + " won!";
		}
		ctx.fillText(txt, 60, play.game.height - 30);

		atoms.draw();
		explosions.draw();
	};

	play.init = function(app){
		play.game = app;
		
		play.canvas = document.createElement('canvas');
		play.canvas.width = app.width;
		play.canvas.height = app.height;
		play.ctx = app.canvas.getContext('2d');

		play.triggers = [
			{
				func: function(){ play.game.scene = false; },
				text: 'Menu',
				x : app.width - 100 - 30,
				y : 30,
				width: 100,
				height: 30
			}
		];

		play.currentLevel = levels.loaded[1];
		var i = 0, l = play.currentLevel.nodes.length;
		while(i<l) {
			var n = play.currentLevel.nodes[i];
			n.pieces = 0;
			n.player = false;
			i++;
		}

		play.turn = {
			current: 0,
			last: false,
			winner: false
		};
		
		play.explosions = [];
		atoms.init(app);
		explosions.init(app);
	};

	return play;
});
