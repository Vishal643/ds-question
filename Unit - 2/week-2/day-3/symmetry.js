function runProgram(input) {
	input = input.trim().split("\n");
	let number_of_input = Number(input[0]);

	var j = 1;
	for (var i = 0; i < number_of_input; i++) {
		let num = Number(input[j++]);
		let matrix = [];
		for (let k = 0; k < num; k++) {
			matrix[k] = input[j++].trim();
		}
		var vertical = true;
		var horizontal = true;

		for (let m = 0, n = num - 1; m < num; m++, n--) {
			if (matrix[m] !== matrix[n]) horizontal = false;

			if (!vertical) continue;
			for (let x = 0; x < num; x++) {
				if (matrix[x][m] !== matrix[x][n]) {
					vertical = false;
					break;
				}
			}
			if (!vertical && !horizontal) break;
		}
		if (!vertical && !horizontal) {
			console.log("NO");
		} else if (!vertical) {
			console.log("HORIZONTAL");
		} else if (!horizontal) {
			console.log("VERTICAL");
		} else {
			console.log("BOTH");
		}
	}
}

if (process.env.USERNAME === "vishal") {
	runProgram(`
    3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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
