/* 
  Title: global.js
  Purpose: Global scripts
  Author: Jeremy Fields, Viget Labs
*/

var PB = PB || {};

(function () {

	'use strict';
	
	PB.Util = {
		
		
		/* global init
		========================================================================== */
		init: function() {
			
		}
		
	};
		
	PB.Global = {
		
		
		/* module variables
		========================================================================== */
		vars: {
			var1: 'init global.js'
		},
		
		
		/* global init
		========================================================================== */
		init: function() {
			
			// do stuff here
			console.log(PB.Global.vars.var1);
			
		},
		
		
		/* internal function
		========================================================================== */
		method_2: function() {
			
			// do stuff here
			
			
		}
		
	};

}());

$(function() { PB.Global.init() });
