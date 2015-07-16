var debug = false;

var proxy = "http://www.cors.io/?u=";
var github = proxy + "http://hhkaos.github.io/arcgis-organization-styler/";
var local = "http://localhost:9090/";

var host =  debug? local : github;

$(document).ready(function(){
	var snippets = [];
	//Apply the current styples
	$("#styler").submit(function(e){
		e.preventDefault();
		$("#custom-style").html($("#css-style").val());
		
		if($("#custom-html").length == 0){
			$("#banner-html").prepend("<div id='custom-html'></div>");
		}
		$("#custom-html").html($("#html-content").val());
		
	});
	$.ajaxSetup ({
    	// Disable caching of AJAX responses
    	cache: false
	});
	//debugger;
	//Loads all the available snippets
	$.ajax({
		url: host + "snippets/snippets.json",
		dataType: "json",
		success: function(data){
			snippets = data.snippets;
			var elems = data.snippets.length;
			$("#snippets").empty();
			for(i = 0; i < elems; i++){
				$("#snippets").append("<option value='"+ i +"'>" + data.snippets[i].name + "</option>");
			}
		}
	});

	//Add the snippet to the textarea
	$("#add-snippet").click(function(){
		var obj = snippets[$("#snippets").val()];

		if(obj.hasOwnProperty("css")){
			//Get the CSS
			$.ajax({
				url: host + obj.css,
				//dataType: "json",
				success: function(data){
					
					$("#css-style").val($("#css-style").val()+"\n"+data);
					$("#submit").click();
				}
			});
		}
		if(obj.hasOwnProperty("html")){
			//Get the HTML
			$.ajax({
				url: host + obj.html,
				//dataType: "json",
				success: function(data){
					
					$("#html-content").val($("#html-content").val()+"\n"+data);
					$("#submit").click();
				}
			});
		}


	});

	//Switch the textarea active
	$("#selector li").click(function(){
		var newActive = $(this).attr("id");
		$("#selector .active").removeClass("active");
		$(this).addClass("active");
		if(newActive == "css"){
			$("#html-content").hide();
			$("#css-style").show();

		}else if(newActive == "html"){
			$("#html-content").show();
			$("#css-style").hide();
		}
	});


	//Displays the code
	$("#getCode").click(function(){
		var tmp = "<style type='text/css'>\n";
		tmp += $("#css-style").val();
		tmp += "\n</style>\n";
		tmp += $("#html-content").val();
		$("#basic-modal-content textarea").val(tmp);
		$("#basic-modal-content").show()
	});
	$("#basic-modal-content button").click(function(){
		$("#basic-modal-content").hide()
	});
});

$(document).delegate('#styler textarea', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
    e.preventDefault();
    var start = $(this).get(0).selectionStart;
    var end = $(this).get(0).selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    $(this).val($(this).val().substring(0, start)
                + "\t"
                + $(this).val().substring(end));

    // put caret at right position again
    $(this).get(0).selectionStart =
    $(this).get(0).selectionEnd = start + 1;
  }

});

$("#close").click(function(){
	if($("#styler").hasClass("closed")){
		$("#styler").removeClass("closed");	
		$("#close").text("Hide styler");
	}else{
		$("#styler").addClass("closed")
		$("#close").text("Show");
	}
});