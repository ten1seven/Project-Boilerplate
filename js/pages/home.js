/* 
  Title: home.js
  Purpose: Home page specific scripts
  Author: Jeremy Fields, Viget Labs
*/

var PB = PB || {};

(function () {

	'use strict';
		
	PB.Home = {
		
		vars: {
			var1: 'home.js init'
		},
		
		'init': function() {
			
			// do stuff here
			console.log(PB.Home.vars.var1);
			
		},
		
		'method_2': function() {
			
			// do stuff here
			
			
		}
		
	};

}());

$(function() { PB.Home.init() });
