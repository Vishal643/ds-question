function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var num_input = input_arr[0].split(" ").map(Number);
	var arr = input_arr[1].split(" ").map(Number);
	var product = 1;
	for (var i = 0; i < arr.length; i++) {
		product *= arr[i];
	}
	console.log(product);
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
