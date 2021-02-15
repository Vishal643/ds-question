function runProgram(input) {
	input = input.trim().split("\n");
	let dim = input.shift().trim().split(" ").map(Number);
	let row = dim[0];
	let col = dim[1];
	let target = dim[2];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(" ").map(Number);
	}
	var count = 0;
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			//handling row
			if (j < col - 2) {
				if (matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] === target) {
					count++;
				}

				//handling diagonal down
				if (i < row - 2) {
					if (
						matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2] ===
						target
					) {
						count++;
					}
				}

				//handling diagonal up
				if (i - 2 >= 0) {
					if (
						matrix[i][j] + matrix[i - 1][j + 1] + matrix[i - 2][j + 2] ===
						target
					) {
						count++;
					}
				}
			}
			//handling column
			if (i < row - 2) {
				if (matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] === target) {
					count++;
				}
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
