/* 
  Title: home.js
  Purpose: Home page specific scripts
  Author: Jeremy Fields, Viget Labs
*/

var PB = PB || {};

(function () {

	'use strict';
		
	PB.Home = {
		
		
		/* module variables
		========================================================================== */
		vars: {
			var1: 'init home.js'
		},
		
		
		/* global init
		========================================================================== */
		init: function() {
			
			// do stuff here
			console.log(PB.Home.vars.var1);
			
		},
		
		
		/* internal function
		========================================================================== */
		method_2: function() {
			
			// do stuff here
			
			
		}
		
	};

}());

$(function() { PB.Home.init() });
