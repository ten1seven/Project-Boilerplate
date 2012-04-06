/* 
  Title: plugins.js
  Purpose: Helper and utility scripts
  Author: Jeremy Fields, Viget Labs
*/

// usage: log('inside coolFunc', this, arguments);
(function(){var b,d,c=this,a=c.console;c.log=b=function(){d.push(arguments);a&&a.log[a.firebug?"apply":"call"](a,Array.prototype.slice.call(arguments))};c.logargs=function(e){b(e,arguments.callee.caller.arguments)};b.history=d=[]})();

