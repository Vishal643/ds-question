function runProgram(input) {
	var rev = "";
	for (var i = input.length - 1; i >= 0; i--) {
		rev = rev + input[i];
	}
	if (Number(rev) === Number(input)) {
		console.log("Yes");
	} else {
		console.log("No");
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
