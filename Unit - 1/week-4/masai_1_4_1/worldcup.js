function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var nz_score = input_arr[0].split(" ").map(Number);
	var eng_score = input_arr[1].split(" ").map(Number);

	if (eng_score[0] > nz_score[0]) {
		console.log("England");
	} else if (eng_score[0] === nz_score[0]) {
		if (eng_score[1] > nz_score[1]) {
			console.log("England");
		} else if (eng_score[1] === nz_score[1]) {
			if (eng_score[2] > nz_score[2]) {
				console.log("England");
			} else {
				console.log("New Zealand");
			}
		} else {
			console.log("New Zealand");
		}
	} else {
		console.log("New Zealand");
	}
}

// 241 15 21
// 241 15 26
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
