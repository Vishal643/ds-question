function runProgram(input) {
	input = input.trim().split(" ").map(Number);
	var row = input[0];
	var col = input[1];
	let str = "";
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			if (i % 2 == 0) {
				str += "#";
			} else {
				if ((i + 1) % 4 === 0) {
					str += "#";
					for (let k = 0; k < col - 1; k++) {
						str += ".";
					}
					break;
				} else if ((i + 1) % 4 === 2) {
					for (let k = 0; k < col - 1; k++) {
						str += ".";
					}
					str += "#";
					break;
				}
			}
		}
		str += "\n";
	}
	console.log(str.trim());
}
if (process.env.USERNAME === "vishal") {
	runProgram(`
    5 3`);
} else {
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
}
