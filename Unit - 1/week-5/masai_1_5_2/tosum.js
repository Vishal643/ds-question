function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var arr = input_arr[1].split(" ").map(Number);
	var target_arr = input_arr[0].split(" ").map(Number);
	var target = target_arr[1];
	var count = 0;
	for (var j = arr.length - 1; j > 0; j--) {
		for (var i = 0; i <= j - 1; i++) {
			var sum = arr[i] + arr[j];
			if (sum === target) {
				count++;
			}
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
