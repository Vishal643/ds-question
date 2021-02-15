// 120 90 70
// 90 80 110
function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var first_score = input_arr[0].split(" ").map(Number);
	var second_score = input_arr[1].split(" ").map(Number);
	var firstTotal = 0;
	var secondTotal = 0;
	for (var i = 0; i < first_score.length; i++) {
		firstTotal = firstTotal + first_score[i];
		secondTotal = secondTotal + second_score[i];
	}
	if (firstTotal > secondTotal) {
		console.log("First");
	} else if (firstTotal === secondTotal) {
		if (first_score[2] > second_score[2]) {
			console.log("First");
		} else if (first_score[2] === second_score[2]) {
			if (first_score[0] > second_score[0]) {
				console.log("First");
			} else {
				console.log("Second");
			}
		} else {
			console.log("Second");
		}
	} else {
		console.log("Second");
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
