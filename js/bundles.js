/* 
  Title: bundles.js
  Purpose: Define site and page-specific JS files
  Author: Jeremy Fields, Viget Labs
*/

var base = {
	
	loadfirst: {
		url: 'js/global.js',
		depends: [
			'js/plugins.js'
		]
	}
	
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