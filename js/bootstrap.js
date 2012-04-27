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
	
	// function for loading the JS package
	PB.loadScripts = function(controller,action) {
		$LAB
		.script([base.loadfirst.depends],base.loadfirst.url).wait() // load and run the global scripts first
		.script([pages[controller][action].depends],pages[controller][action].url);
	};
})();