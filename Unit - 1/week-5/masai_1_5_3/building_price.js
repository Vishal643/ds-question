function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var street = input_arr.shift();

	for (var i = 0, j = 0; i < street; i++) {
		var max = 0.5;
		var count = 0;
		var price_arr = input_arr[j++].split(" ").map(Number);
		var price = price_arr[1];
		var arr = input_arr[j++].split(" ").map(Number);

		for (var k = 0; k < arr.length; k++) {
			if (arr[k] > max) {
				max = arr[k];
				count++;
			}
		}

		console.log(count * price);
	}
}

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
