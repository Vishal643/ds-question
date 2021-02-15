function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var arr = input_arr[1].split(" ").map(Number);

	var string_obj = {};
	for (var i = 0; i < arr.length; i++) {
		var elem = arr[i];
		var prev_count = string_obj[elem];
		if (prev_count == undefined) {
			string_obj[elem] = 1;
		} else {
			string_obj[elem] = prev_count + 1;
		}
	}

	var sum = 0;
	for (key in string_obj) {
		sum = sum + Number(key);
	}
	console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
	read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/, "");
	read = read.replace(/\n$/, "");
	runProgram(read);
});
process.on("SIGINT", function () {
	read = read.replace(/\n$/, "");
	runProgram(read);
	process.exit(0);
});
