/* 
  Title: bootstrap.js
  Purpose: Initial script to run after jQuery is loaded
  Author: Jeremy Fields, Viget Labs
*/

var PB = PB || {};

(function() {
	var body = document.body;
	
	PB.controller = body.getAttribute('data-controller').toLowerCase();
	PB.action = body.getAttribute('data-action').toLowerCase();
	
	// function for loading the JS packages
	PB.loadScripts = function(controller,action) {
		
		Modernizr.load([
			{
				load: base.loadfirst.depends
			},{
				load: base.loadfirst.url
			},{
				load: pages[controller][action].depends
			},{
				load: pages[controller][action].url
			}
		]);
		
	};
})();