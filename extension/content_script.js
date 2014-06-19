/*iframe =document.createElement("iframe")
iframe.src = window.location.href;
iframe.id = "app";
document.body.appendChild(iframe)*/


if(!document.getElementById("style")){
	style = document.createElement("link")
	style.id = "style";
	style.rel = "stylesheet";
	style.type = "text/css";
	style.href = "";
	document.documentElement.firstChild.appendChild(style);
	console.log("no existe")

	$("body").prepend(""+
		"<form id='styler'>"+
		"	<div id='close'>Close</div>"+
		//"	<p>Custom style css:</p>"+
		"	<p>Snippets: <br><select id='snippets'></select><button id='add-snippet'>Add</button></p>"+
		"	<ul id='selector'><li id='css' class='active'>CSS</li><li id='html'>HTML</li></ul>"+
		"	<textarea id='css-style'></textarea><textarea style='display:none' id='html-content'></textarea><br>"+
		"	<input type='submit' value='Apply styles'>"+
		"</form>");
	$("body").append("<link id='style' type='text/css' rel='stylesheet' href='http://hhkaos.github.io/arcgis-organization-styler/resources/styles.css'>")
	$("body").append("<style id='custom-style' type='text/css'></style>")
	$("body").append("<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>")
	var loadBehaviour = function(){
		$("body").append("<script src='http://hhkaos.github.io/arcgis-organization-styler/resources/scripts.js'></script>");
	};

	setTimeout(loadBehaviour, 2000);
	
	

}else
	console.log("ya existe")

