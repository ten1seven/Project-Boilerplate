/* 
  Title: global.js
  Purpose: Global scripts
  Author: Jeremy Fields, Viget Labs
*/

var TL = TL || {};

(function () {

	'use strict';
	
	TL.Util = {
		
		'init': function() {
			
			
			
		}
		
	};
		
	TL.Global = {
		
		vars: {
			var1: 'hello world!'
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

$(function() { TL.Global.init() });