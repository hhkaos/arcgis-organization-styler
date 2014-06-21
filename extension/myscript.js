$(document).ready(function(){
	
	chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
	chrome.tabs.executeScript(null, {file: "content_script.js"});
});

