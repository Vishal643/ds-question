function runProgram(input) {
	input = input.trim();
	let maxLength = 1,
		start = 0;

	for (let i = 0; i < input.length; i++) {
		for (let j = i; j < input.length; j++) {
			let flag = true;

			// Checking for palindrome
			for (let k = 0; k < (j - i + 1) / 2; k++)
				if (input.charAt(i + k) != input.charAt(j - k)) flag = false;

			if (flag && j - i + 1 > maxLength) {
				start = i;
				maxLength = j - i + 1;
			}
		}
	}

	let outPutStr = "";
	for (let i = start; i <= start + maxLength - 1; ++i) {
		outPutStr += input.charAt(i);
	}
	console.log(outPutStr.length);
}

if (process.env.USERNAME === "vishal") {
	runProgram(`thisracecarisgood`);
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
