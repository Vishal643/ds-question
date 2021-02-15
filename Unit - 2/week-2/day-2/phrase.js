function runProgram(input) {
	input = input.trim().split("\n");
	let dim = input.shift().trim().split(" ").map(Number);
	let row = dim[0];
	let col = dim[1];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split("");
	}

	var count = 0;
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			//handling row
			if (j < col - 3) {
				if (
					matrix[i][j] === "s" &&
					matrix[i][j + 1] === "a" &&
					matrix[i][j + 2] === "b" &&
					matrix[i][j + 3] == "a"
				) {
					count++;
				}

				//handling diagonal down
				if (i < row - 3) {
					if (
						matrix[i][j] === "s" &&
						matrix[i + 1][j + 1] === "a" &&
						matrix[i + 2][j + 2] === "b" &&
						matrix[i + 3][j + 3] === "a"
					) {
						count++;
					}
				}

				//handling diagonal up
				if (i - 3 >= 0) {
					if (
						matrix[i][j] === "s" &&
						matrix[i - 1][j + 1] === "a" &&
						matrix[i - 2][j + 2] === "b" &&
						matrix[i - 3][j + 3] === "a"
					) {
						count++;
					}
				}
			}
			//handling column
			if (i < row - 3) {
				if (
					matrix[i][j] === "s" &&
					matrix[i + 1][j] === "a" &&
					matrix[i + 2][j] === "b" &&
					matrix[i + 3][j] === "a"
				) {
					count++;
				}
			}
		}
	}
	console.log(count);
}

if (process.env.USERNAME === "vishal") {
	runProgram(`
	5 5
	safer
	amjad
	babol
	aaron
	songs`);
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
