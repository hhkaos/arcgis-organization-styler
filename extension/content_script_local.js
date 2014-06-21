if(!document.getElementById("style")){	
	$("body").prepend(""+
		"<form id='styler'>"+
		"	<div id='close'>Hide styler</div>"+
		"	<button id='getCode'>Get the code</button>"+
		"	<p>Snippets: </p><div id='snippets-selector'><select id='snippets'><option>Loading...</option></select><button id='add-snippet'>Add</button></div>"+
		"	<ul id='selector'><li id='css' class='active'>CSS</li><li id='html'>HTML</li></ul>"+
		"	<textarea id='css-style'></textarea><textarea style='display:none' id='html-content'></textarea><br>"+
		"	<button id='submit'>Apply styles</button>"+
		"</form><div id='basic-modal-content'><p><p><strong>Instructions:</strong><br> 1) Go to My Organization > Edit Settings > Home Page tab, 2) In the Banner section, choose the \"HTML\" radio button and click the \"View HTML Source\" button (the last button on the Banner box's toolbar), 3) Paste the HTML code below into the text field after/below the existing code </p><textarea></textarea><button>Close</button>");
	$("body").append("<link id='style' type='text/css' rel='stylesheet' href='http://localhost:9090/resources/styles.css'>")
	$("body").append("<style id='custom-style' type='text/css'></style>")
	$("body").append("<script src='http://localhost:9090/extension/jquery-1.11.1.min.js'></script>")


	var loadBehaviour = function(){
		$("body").append("<script src='http://localhost:9090/resources/scripts.js'></script>");
	};
	setTimeout(loadBehaviour, 2000);
}