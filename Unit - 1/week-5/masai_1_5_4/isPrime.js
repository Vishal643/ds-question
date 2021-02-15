function runProgram(input) {
	var num = Number(input);
	var count = 0;

	for (var i = 1; i <= num; i++) {
		if (num % i === 0) {
			count++;
		}
	}
	// for (var i = 1; i <= num / 2; i++) {
	// 	if (num % i === 0) {
	// 		count++;
	// 	}
	// }

	console.log(count);
	if (count == 2) {
		console.log("Yes");
	} else {
		console.log("No");
	}
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
