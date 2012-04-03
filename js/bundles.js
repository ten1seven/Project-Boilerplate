/* 
  Title: bundles.js
  Purpose: Define site and page-specific JS files
  Author: Jeremy Fields, Viget Labs
*/

var _base = {
	
	_global: [
		'js/plugins.js',
		'js/global.js'
	]
	
};

var pages = {
	
	home: {
		
		index: {
			url: 'js/pages/home.js',
			depends: [
				
			]
		},
		
		show: {
			url: '',
			depends: [
				
			]
		}
		
	}
	
};