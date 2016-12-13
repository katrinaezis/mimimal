$.get("./content.json", function(data) {
	console.log(data);
	var keys = [];
	for (d in data) {
		// this is the keyname
		console.log(d);
		// probs store keys
		keys.push(d);
	}
	console.log(keys);
	console.log(data.calendar);

	console.log(keys[0]);
})