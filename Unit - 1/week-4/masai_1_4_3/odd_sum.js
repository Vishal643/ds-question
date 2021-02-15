function runProgram(input) {
	var input_arr = input.split(" ").map(Number);
	var arr = input_arr[0];
	var sum = 0;
	for (var i = 0; i <= arr; i++) {
		if (i % 2 !== 0) {
			sum += i;
		}
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
