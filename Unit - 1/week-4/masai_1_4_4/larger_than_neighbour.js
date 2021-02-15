function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var arr = input_arr[1].split(" ").map(Number);

	var n = arr.length;
	var count = 0;
	if (arr[0] > arr[1]) {
		count = 1;
	}
	if (arr[n - 1] > arr[n - 2] && count === 0) {
		count = 1;
	} else if (arr[n - 1] > arr[n - 2] && count === 1) {
		count = 2;
	}
	for (var i = 1; i < n; i++) {
		if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
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
