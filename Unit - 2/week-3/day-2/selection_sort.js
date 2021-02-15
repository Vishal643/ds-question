function runProgram(input) {
	input = input.trim().split("\n");
	let arr = input[1].trim().split(" ").map(Number);
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		let temp = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}
	console.log(arr.join(" "));
}
if (process.env.USERNAME === "vishal") {
	runProgram(`
    5
    3 5 0 9 8`);
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
