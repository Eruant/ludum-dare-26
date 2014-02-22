requirejs.config({
	baseUrl: 'js/game',
	paths: {
		'module': '../module',
		'lib': '../lib'
	}
});

requirejs(['game'], function(game) {
	game.init();
});
