function runProgram(input) {
	var marks = input.split(" ").map(Number);
	if (marks >= 100) {
		console.log("A");
	} else if (marks >= 90 && marks < 100) {
		console.log("B");
	} else if (marks >= 80 && marks < 90) {
		console.log("C");
	} else {
		console.log("F");
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
