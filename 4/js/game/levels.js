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
		},
		{
			x: 0,
			y: 0,
			scale: 2,
			nodes: [
				{ id: 1,x:0, y:0, pieces: 0, player: false, connections: [2,3,5,8,11,14] },
				{ id:2, x:0, y:-40, pieces: 0, player: false, connections: [1,3,14,15,16,17] },
				{ id:3, x:30, y:-20, pieces: 0, player: false, connections: [1,2,4,5,17,18] },
				{ id:4, x:60, y:0, pieces: 0, player: false, connections: [3,5,6,18,21,22] },
				{ id:5, x:30, y:20, pieces: 0, player: false, connections: [1,3,4,6,7,8] },
				{ id:6, x:60, y:40, pieces: 0, player: false, connections: [4,5,7,22,23,25] },
				{ id:7, x:30, y:60, pieces: 0, player: false, connections: [5,6,8,9,25,26] },
				{ id:8, x:0, y:40, pieces: 0, player: false, connections: [1,5,7,9,10,11] },
				{ id:9, x:0, y:80, pieces: 0, player: false, connections: [7,8,10,26,27] },
				{ id:10, x:-30, y:60, pieces: 0, player: false, connections: [8,9,11,12,27,28] },
				{ id:11, x:-30, y:20, pieces: 0, player: false, connections: [1,8,10,12,13,14] },
				{ id:12, x:-60, y:40, pieces: 0, player: false, connections: [10,11,13,28,30,31] },
				{ id:13, x:-60, y:0, pieces: 0, player: false, connections: [11,12,14,31,32,33] },
				{ id:14, x:-30, y:-20, pieces: 0, player: false, connections: [1,2,11,13,33,15] },
				{ id:15, x:-30, y:-60, pieces: 0, player: false, connections:[2,14,16,33,35] },
				{ id:16, x:0, y:-80, pieces: 0, player: false, connections:[2,15,17] },
				{ id:17, x:30, y:-60, pieces: 0, player: false, connections:[2,3,16,18,19] },
				{ id:18, x:60, y:-40, pieces: 0, player: false, connections:[3,4,17,19,20,21] },
				{ id:19, x:60, y:-80, pieces: 0, player: false, connections:[17,18,20] },
				{ id:20, x:90, y:-60, pieces: 0, player: false, connections:[18,19,21] },
				{ id:21, x:90, y:-20, pieces: 0, player: false, connections:[4,18,20,22] },
				{ id:22, x:90, y:20, pieces: 0, player: false, connections:[4,6,21,23] },
				{ id:23, x:90, y:60, pieces: 0, player: false, connections:[6,22,24,25] },
				{ id:24, x:90, y:100, pieces: 0, player: false, connections:[23,25] },
				{ id:25, x:60, y:80, pieces: 0, player: false, connections:[6,7,23,24,26] },
				{ id:26, x:30, y:100, pieces: 0, player: false, connections:[7,9,25] },
				{ id:27, x:-30, y:100, pieces: 0, player: false, connections:[9,10,28] },
				{ id:28, x:-60, y:80, pieces: 0, player: false, connections:[10,12,27,29,30] },
				{ id:29, x:-90, y:100, pieces: 0, player: false, connections:[28,30] },
				{ id:30, x:-90, y:60, pieces: 0, player: false, connections:[12,28,29,31] },
				{ id:31, x:-90, y:20, pieces: 0, player: false, connections:[12,13,30,32] },
				{ id:32, x:-90, y:-20, pieces: 0, player: false, connections:[13,31,33,34] },
				{ id:33, x:-60, y:-40, pieces: 0, player: false, connections:[13,14,15,32,34,35] },
				{ id:34, x:-90, y:-60, pieces: 0, player: false, connections:[32,33,35] },
				{ id:35, x:-60, y:-80, pieces: 0, player: false, connections:[15,33,34] }
			]
		},
		{
			x: 0,
			y: 0,
			scale: 2,
			nodes: [
				{ id: 1,x:0, y:0, pieces: 0, player: false, connections: [2,3,5,8,11,14] },
				{ id:2, x:0, y:-40, pieces: 0, player: false, connections: [1,3,14,15,16,17] },
				{ id:3, x:30, y:-20, pieces: 0, player: false, connections: [1,2,4,5,17,18] },
				{ id:4, x:60, y:0, pieces: 0, player: false, connections: [3,5,6,18,21,22] },
				{ id:5, x:30, y:20, pieces: 0, player: false, connections: [1,3,4,6,7,8] },
				{ id:6, x:60, y:40, pieces: 0, player: false, connections: [4,5,7,22,23,25] },
				{ id:7, x:30, y:60, pieces: 0, player: false, connections: [5,6,8,9,25,26] },
				{ id:8, x:0, y:40, pieces: 0, player: false, connections: [1,5,7,9,10,11] },
				{ id:9, x:0, y:80, pieces: 0, player: false, connections: [7,8,10,26,27] },
				{ id:10, x:-30, y:60, pieces: 0, player: false, connections: [8,9,11,12,27,28] },
				{ id:11, x:-30, y:20, pieces: 0, player: false, connections: [1,8,10,12,13,14] },
				{ id:12, x:-60, y:40, pieces: 0, player: false, connections: [10,11,13,28,30,31] },
				{ id:13, x:-60, y:0, pieces: 0, player: false, connections: [11,12,14,31,32,33] },
				{ id:14, x:-30, y:-20, pieces: 0, player: false, connections: [1,2,11,13,33,15] },
				{ id:15, x:-30, y:-60, pieces: 0, player: false, connections:[2,14,16,33,35] },
				{ id:16, x:0, y:-80, pieces: 0, player: false, connections:[2,15,17] },
				{ id:17, x:30, y:-60, pieces: 0, player: false, connections:[2,3,16,18,19] },
				{ id:18, x:60, y:-40, pieces: 0, player: false, connections:[3,4,17,19,20,21] },
				{ id:19, x:60, y:-80, pieces: 0, player: false, connections:[17,18,20] },
				{ id:20, x:90, y:-60, pieces: 0, player: false, connections:[18,19,21,36] },
				{ id:21, x:90, y:-20, pieces: 0, player: false, connections:[4,18,20,22,36] },
				{ id:22, x:90, y:20, pieces: 0, player: false, connections:[4,6,21,23] },
				{ id:23, x:90, y:60, pieces: 0, player: false, connections:[6,22,24,25,40] },
				{ id:24, x:90, y:100, pieces: 0, player: false, connections:[23,25,40] },
				{ id:25, x:60, y:80, pieces: 0, player: false, connections:[6,7,23,24,26] },
				{ id:26, x:30, y:100, pieces: 0, player: false, connections:[7,9,25] },
				{ id:27, x:-30, y:100, pieces: 0, player: false, connections:[9,10,28] },
				{ id:28, x:-60, y:80, pieces: 0, player: false, connections:[10,12,27,29,30] },
				{ id:29, x:-90, y:100, pieces: 0, player: false, connections:[28,30,41] },
				{ id:30, x:-90, y:60, pieces: 0, player: false, connections:[12,28,29,31,41] },
				{ id:31, x:-90, y:20, pieces: 0, player: false, connections:[12,13,30,32] },
				{ id:32, x:-90, y:-20, pieces: 0, player: false, connections:[13,31,33,34,45] },
				{ id:33, x:-60, y:-40, pieces: 0, player: false, connections:[13,14,15,32,34,35] },
				{ id:34, x:-90, y:-60, pieces: 0, player: false, connections:[32,33,35,45] },
				{ id:35, x:-60, y:-80, pieces: 0, player: false, connections:[15,33,34] },
				{ id:36, x:120, y:-40, pieces: 0, player: false, connections:[20,21,37] },
				{ id:37, x:150, y:-20, pieces: 0, player: false, connections:[36,38] },
				{ id:38, x:150, y:20, pieces: 0, player: false, connections:[37,39] },
				{ id:39, x:150, y:60, pieces: 0, player: false, connections:[38,40] },
				{ id:40, x:120, y:80, pieces: 0, player: false, connections:[23,24,39] },
				{ id:41, x:-120, y:80, pieces: 0, player: false, connections:[29,30,42] },
				{ id:42, x:-150, y:60, pieces: 0, player: false, connections:[41,43] },
				{ id:43, x:-150, y:20, pieces: 0, player: false, connections:[42,44] },
				{ id:44, x:-150, y:-20, pieces: 0, player: false, connections:[43,45] },
				{ id:45, x:-120, y:-40, pieces: 0, player: false, connections:[32,34,44] }
			]
		}
	];

	levels.loaded = levels.defaults.slice(0);

	levels.init = function(){
		levels.loaded = levels.defaults.slice(0);
	};

	return levels;
});
