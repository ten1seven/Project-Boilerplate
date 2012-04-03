/* 
  Title: home.js
  Purpose: Home page specific scripts
  Author: Jeremy Fields, Viget Labs
*/

var TL = TL || {};

(function () {

	'use strict';
		
	TL.Home = {
		
		vars: {
			var1: 'hello from the home page!'
		},
		
		'init': function() {
			
			// do stuff here
			log(this.vars.var1);
			
		},
		
		'method_2': function() {
			
			// do stuff here
			
			
		}
		
	};

}());

$(function() { TL.Home.init() });