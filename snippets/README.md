How to build snippets
==========================

Here you will learn how easy is to create and contribute with your own snippets.

## Understanding the snippets.json

This file is requested by the extension each time. It is loaded **from Github** in order to know which snippets are available, so it will be always updated.

Let's take a first look to the [snippets.json](https://github.com/hhkaos/arcgis-organization-styler/blob/master/snippets/snippets.json) file. Under the "_snippets_" property there is **an array** of objects that defines all the available snippets and their dependencies.

Let's take a quick overview of the structure:

* **name** (_*_): It defines the name that will appear inside the _select box_ inside the extension itself.

* **html** (_optional_): In case that the extesion includes any HTML code you have to include the URL where the code is located

* **css** (_optional_): As it happens with the property HTML you can optionally add CSS code to snippet.

### Example: "_Add a live map_" snippet

First of all take a look to the object which includes all the information.

[**snippets.json**](https://github.com/hhkaos/arcgis-organization-styler/blob/master/snippets/snippets.json):

	{
		"name": "Add a live map",
		"html": "hhkaos.github.io/arcgis-organization-styler/snippets/html/livemap.html",
		"css": "hhkaos.github.io/arcgis-organization-styler/snippets/styles/livemap.css"
	}

Above we can see that the snippet includes CSS and HTML code. If we check those URLs that points to the actual code itself will find this:

[**livemap.html**](https://github.com/hhkaos/arcgis-organization-styler/blob/master/snippets/html/livemap.html):

	<!-- Instructions: change de webmap=[WEB_MAP_ID] for your current webmap id -->
	<embed height="470" src="http://www.arcgis.com/home/webmap/embedViewer.html?webmap=ce3d67d7783349dbbf3fa67aa899308c" type="text/html" width="960"></embed>	

This is a simple code that includes an embeded object with a webmap on it. 

**Notice that the file includes some comments** in order to help the user to understand how it works (remember: maybe he has no idea about HTML).

Now let's take a look to the [**livemap.css**](https://github.com/hhkaos/arcgis-organization-styler/blob/master/snippets/styles/livemap.css) file:

	/* This adds some styles to the webmap */
	#custom-html{
		border-radius:10px;
		-moz-border-radius:10px;
		-webkit-border-radius: 10px;
		overflow: hidden;
	}

This works exactly in the same way that *livemap.html* but in this case with CSS code. Be carefull with the comments, in this case comments are representend by /\* ... \*/ instead of \<!-- ... -->.

## Hosting the snippets

In order to ensure that the snippets will be always available we ask you to host the snippets files within the repository.

## How to develop in local

1. Download this repository
2. [Enable the developer mode in your Google Chrome and hoad the extension](https://developer.chrome.com/extensions/getstarted#unpacked)
3. Start a web page server inside the root folder (recomended: [http-server](https://www.npmjs.org/package/http-server) for [node.js](http://nodejs.org/))
4. Change on extension/myscript.js this line:
	
	```	
		chrome.tabs.executeScript(null, {file: "content_script.js"});
	```
	For this one:
	
	```	
		chrome.tabs.executeScript(null, {file: "content_script_local.js"});
	```	
5. Change on resources/scripts.js the variable debug=true (line 1)

This must be all.

# That's it! You are ready to go ^_^
If you have any suggestion, question, etc. you can just open an [Issue here inside](https://github.com/hhkaos/arcgis-organization-styler/issues). Thanks!	
