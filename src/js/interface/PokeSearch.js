// Search input handler

$(".poke-search[context='ranking-search']").on("keyup", function(e){

	var types = ["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"];

	var searchStr = $(this).val().toLowerCase();

	if(searchStr == ''){
		$(".rankings-container > .rank").show();
		return;
	}

	var searchKeys = searchStr.split('&');
	for (var i = 0; i< searchKeys.length; i++){
		searchKeys[i] = searchKeys[i].split(',');
	}

	$(".rankings-container > .rank").each(function(index, value){

		var show = true;

		for(var i = 0; i < searchKeys.length; i++){
			var or = 0;
			for (var j=0;j<searchKeys[i].length;j++) {
				if(types.indexOf(searchKeys[i][j]) == -1){
					// Name search
					var pokeName = $(this).find(".name").html().toLowerCase();

					if(pokeName.startsWith(searchKeys[i][j])){
						or += 1;
					}
				} else {
					// Type search

					if(($(this).attr("type-1") == searchKeys[i][j]) || ($(this).attr("type-2") == searchKeys[i][j])){
						or += 1;
					}
				}
			}
			show = show && or;
		}

		if(show){
			$(this).show();
		} else{
			$(this).hide();
		}
	});
});
