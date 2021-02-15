function runProgram(input) {
	input = input.trim().split("\n");
	let dim = input.shift().trim().split(" ").map(Number);
	let row = dim[0];
	let col = dim[1];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(" ").map(Number);
	}
	let transpose = [];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			if (transpose[j] === undefined) {
				transpose[j] = [];
			}
			transpose[j][i] = matrix[i][j];
		}
	}
	transpose.forEach((row) => {
		console.log(row.join(" "));
	});
}

if (process.env.USERNAME === "vishal") {
	runProgram(`
	5 4
	0 0 0 0
	1 1 1 1
	2 2 2 2
	3 3 3 3
	4 4 4 4`);
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
