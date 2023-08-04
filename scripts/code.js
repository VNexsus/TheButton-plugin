(function(window, undefined){
 
	window.timer = null;
 
    window.Asc.plugin.init = function()  {
		window.Asc.plugin.loadModule("url.json", function(content){
			var json = JSON.parse(content);
			if(json && json.url){
				window.open(json.url, "_blank");
			}
			window.setTimeout(window.Asc.plugin.executeCommand("close", ""), 500);
		});
    };

})(window, undefined);
