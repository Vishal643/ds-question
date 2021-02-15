function runProgram(input) {
	input = input.trim().split("\n");
	let dim = input.shift().trim().split(" ").map(Number);
	let row = dim[0];
	let col = dim[1];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(" ").map(Number);
	}
	var sum = 0;
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			if (matrix[i][j] % 3 === 0) {
				sum += matrix[i][j];
			}
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
