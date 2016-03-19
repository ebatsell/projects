$(document).ready(function() {

	$("button").click(function() {
		var input = $("input[name=add").val();
		$("table").append("<ul>" + input + "</ul>");
	});

	$(document).on('click', 'ul', function() {
		$(this).remove();
	});

    $(document).keydown(function(key) {
    	var keyInt = parseInt(key.which, 10);
    	
    	//Left
    	if (keyInt === 37)
    		$('img').animate({left: "-=10px"}, 5);
    	//Up
    	if (keyInt === 38)
    		$('img').animate({top: "-=10px"}, 5);
    	//Right
    	if (keyInt === 39)
    		$('img').animate({left: "+=10px"}, 5);
    	//Down
    	if (keyInt === 40)
    		$('img').animate({top: "+=10px"}, 5);
	});
});