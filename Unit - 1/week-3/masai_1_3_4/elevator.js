// 5
// 24 83 89 43 91

function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var persons_weight = input_arr[1].split(" ");
	for (var i = 0; i < persons_weight.length; i++) {
		console.log(Number(persons_weight[i]) < 85 ? "Enter" : "Beep");
	}
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
