
var greeting = function (name) {
    confirm("Great to see you," + " " + name);
};

var hello = function() {
	alert("Hello world!");
};

//All this stuff is to show different things you can do with JS for my own reference
var person = {
	name : "Evan",
	age : 18,
	gender : "Male"
}
var friends = new Object();
friends["bill"] = new Object();
friends["steve"] = new Object();
friends.steve.firstName = "Steve";
friends.steve.lastName = "Steve";
friends.steve.number = 123666;
friends.bill.firstName = "Bill";
friends.bill.lastName = "Steve";
friends.bill.number = 420666;

var search = function(name) {
    for (var i in friends)
        if (friends[i].firstName === name) {
            console.log(friends[i]);
            return friends[i];
        }
        
}