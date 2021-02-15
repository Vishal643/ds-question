function runProgram(input) {
	var input_score = input.split(" ");
	var distance = Number(input_score[0]);
	var time = Number(input_score[1]);
	console.log(distance);
	console.log(time);
	if (distance > 1000 && time > 5) {
		console.log("Keep Going");
		return;
	}
	if (distance / time > 40) {
		console.log("Apply Brake");
	} else {
		console.log("Keep Going");
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
