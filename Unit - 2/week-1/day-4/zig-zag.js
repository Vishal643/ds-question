function runProgram(input) {
	input = input.trim().split("\n");
	var res = "";
	for (var i = 1; i < input.length; i++) {
		let row = input[i].trim();
		res += (i % 2 === 1 ? row.split(" ").reverse().join(" ") : row) + " ";
	}
	console.log(res.trim());
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
