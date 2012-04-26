/* 
  Title: init.js
  Purpose: Loads jQuery, bootstrap and bundles along with global and page-specific JS files
  Author: Jeremy Fields, Viget Labs
*/

// remove for production!!!
$LAB.setGlobalDefaults({
	'CacheBust': true
});

$LAB.script('//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js','js/bootstrap.js','js/bundles.js').wait(function() {
	if (typeof window.jQuery === 'undefined') {
		
		// first load failed, load local fallback, then dependencies  
		$LAB.script('js/libs/jquery-1.7.2.min.js').wait(PB.loadScripts(PB.controller,PB.action));  
	} else {
		
		// first load was a success, proceed to loading dependencies
		PB.loadScripts(PB.controller,PB.action);
	}
});