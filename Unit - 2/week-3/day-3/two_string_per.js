function runProgram(input) {
	input = input.trim().split("\n");
	let str1 = input[0].trim();
	let str2 = input[1].trim();
	let flag = false;
	for (var i = 0; i < str2.length; i++) {
		for (var j = 0; j < str1.length; j++) {
			if (str1[j] === str2[i]) {
				flag = true;
				break;
			} else {
				flag = false;
			}
		}
		if (flag === false) {
			console.log("No");
			return;
		}
	}

	console.log(flag ? "Yes" : "No");
}

if (process.env.USERNAME === "vishal") {
	runProgram(`
	anamakia
    nmasjsdz`);
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
