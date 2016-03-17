var list = [];

var addItem = function(item) {
	list.push(item);
}

var removeItem = function(index) {
	list.splice(index, 1);
}

var displayList = function() {
	console.log("The items in your todo list are: ");
	for (var i in list) {
		console.log(list[i]);
	}
}


