define(function() {

	var levels = {};
	
	levels.defaults = [
		{
			x: 0,
			y: -20,
			scale: 2,
			nodes: [
				{ id: 1,x:0, y:0, pieces: 0, player: false, connections: [2,3,5,8,11,14] },
				{ id:2, x:0, y:-40, pieces: 0, player: false, connections: [1,3,14] },
				{ id:3, x:30, y:-20, pieces: 0, player: false, connections: [1,2,4,5] },
				{ id:4, x:60, y:0, pieces: 0, player: false, connections: [3,5,6] },
				{ id:5, x:30, y:20, pieces: 0, player: false, connections: [1,3,4,6,7,8] },
				{ id:6, x:60, y:40, pieces: 0, player: false, connections: [4,5,7] },
				{ id:7, x:30, y:60, pieces: 0, player: false, connections: [5,6,8,9] },
				{ id:8, x:0, y:40, pieces: 0, player: false, connections: [1,5,7,9,10,11] },
				{ id:9, x:0, y:80, pieces: 0, player: false, connections: [7,8,10] },
				{ id:10, x:-30, y:60, pieces: 0, player: false, connections: [8,9,11,12] },
				{ id:11, x:-30, y:20, pieces: 0, player: false, connections: [1,8,10,12,13,14] },
				{ id:12, x:-60, y:40, pieces: 0, player: false, connections: [10,11,13] },
				{ id:13, x:-60, y:0, pieces: 0, player: false, connections: [11,12,14] },
				{ id:14, x:-30, y:-20, pieces: 0, player: false, connections: [1,2,11,13] }
			]
		}
	];

	levels.loaded = levels.defaults.slice(0);

	levels.init = function(){
		levels.loaded = levels.defaults.slice(0);
	};

	return levels;
});
