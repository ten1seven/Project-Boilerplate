/* 
  Title: bootstrap.js
  Purpose: Initial script to run after jQuery is loaded
  Author: Jeremy Fields, Viget Labs
*/

var TL = TL || {};

(function() {
	var body = document.body;
	
	TL.controller = body.getAttribute('data-controller').toLowerCase();
	TL.action = body.getAttribute('data-action').toLowerCase();
})();

TL.loadScripts = function(controller,action) {
	$LAB.script([_base._global,pages[controller][action].depends],pages[controller][action].url);
};