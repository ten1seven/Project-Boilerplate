/* 
  Title: global.js
  Purpose: Global scripts
  Author: Jeremy Fields, Viget Labs
*/

var PB = PB || {};

(function () {

	'use strict';
	
	PB.Util = {
		
		'init': function() {
			
			
			
		}
		
	};
		
	PB.Global = {
		
		vars: {
			var1: 'init global.js'
		},
		
		'init': function() {
			
			// do stuff here
			console.log(PB.Global.vars.var1);
			
		},
		
		'method_2': function() {
			
			// do stuff here
			
			
		}
		
	};

}());

$(function() { PB.Global.init() });
