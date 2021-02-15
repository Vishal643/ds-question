function runProgram(input) {
	input = input.trim().split("\n");
	var matrix = [];
	var transpose = [];
	for (var i = 0; i < input.length; i++) {
		matrix[i] = input[i].trim().split(" ");
	}

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (transpose[j] === undefined) transpose[j] = [];
			transpose[j][i] = matrix[i][j];
		}
	}

	var diagonal1 = matrix[0][0];
	var diagonal2 = matrix[2][0];
	var flag1 = true,
		flag2 = true;
	for (var i = 0; i < matrix.length; i++) {
		//for rows
		if (
			matrix[i].every(function (e) {
				return e === matrix[i][0];
			})
		) {
			console.log(matrix[i][0]);
			return;
		}
		//for cols
		if (
			transpose[i].every(function (e) {
				return e === matrix[i][0];
			})
		) {
			console.log(transpose[i][0]);
			return;
		}

		//for diagonals
		if (matrix[i][i] !== diagonal1) {
			flag1 = false;
		}
		if (matrix[2 - i][2 - (matrix.length - 1 - i)] !== diagonal2) {
			flag2 = false;
		}
	}
	if (flag1) {
		console.log(diagonal1);
		return;
	}
	if (flag2) {
		console.log(diagonal2);
		return;
	}
	console.log("Tie");
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
