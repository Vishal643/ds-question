function runProgram(input) {
	var input_arr = input.split("\n");
	var num_matches = input_arr[0].split(" ").map(Number);
	var bats_1_runs = input_arr[1].split(" ").map(Number);
	var bats_2_runs = input_arr[2].split(" ").map(Number);
	var main_input = input.split(" ").map(Number);
	var avg1 = 0,
		sum1 = 0;
	var avg2 = 0,
		sum2 = 0;
	for (var i = 0; i < bats_1_runs.length; i++) {
		sum1 = sum1 + bats_1_runs[i];
		sum2 = sum2 + bats_2_runs[i];
	}
	avg1 = Math.ceil(sum1 / num_matches);
	avg2 = Math.ceil(sum2 / num_matches);

	if (avg1 > avg2 && avg1 % 2 === 0) {
		console.log(avg1);
	} else if (avg2 > avg1 && avg2 % 2 === 0) {
		console.log(avg2);
	} else if (avg2 === avg1 && avg2 % 2 === 0) {
		console.log(avg2);
	} else {
		console.log("-1");
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
