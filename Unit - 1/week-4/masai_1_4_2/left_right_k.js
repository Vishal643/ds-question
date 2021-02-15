function runProgram(input) {
	var input_arr = input.split(" ").map(Number);
	var left = input_arr[0];
	var right = input_arr[1];
	var k = input_arr[2];
	var count = 0;

	for (var i = left; i <= right; i++) {
		if (i % k === 0) {
			count++;
		}
	}
	console.log(count);
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
