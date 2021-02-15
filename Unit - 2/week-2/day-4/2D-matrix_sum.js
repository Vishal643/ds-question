function runProgram(input) {
	input = input.trim().split("\n");
	let dim = input[0].trim().split(" ").map(Number);
	let row = dim[0];
	let col = dim[1];
	let matrix = [];
	for (let i = 0; i <= row; i++) {
		matrix[i] = input[i].trim().split(" ").map(Number);
	}

	let input2 = input.slice(row + 1);
	let dim2 = input2[0].trim().split(" ").map(Number);
	let row1 = dim2[0];
	let col1 = dim2[1];
	let matrix1 = [];
	for (let i = 0; i <= row1; i++) {
		matrix1[i] = input2[i].split(" ").map(Number);
	}

	let sum1 = 0;
	let sum2 = 0;
	for (let i = 1; i <= row; i++) {
		for (let j = 0; j < col; j++) {
			sum1 += matrix[i][j];
		}
	}
	// console.log(matrix1);
	for (let k = 1; k <= row1; k++) {
		for (let l = 0; l < col1; l++) {
			sum2 += matrix1[k][l];
		}
	}
	// console.log(sum2);
	console.log(sum1 > sum2 ? sum1 : sum2);
}

if (process.env.USERNAME === "vishal") {
	runProgram(`
	3 4
	1 2 3 4
	0 5 6 1
	9 3 0 8
	2 2
	8 8
	8 8
	`);
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
