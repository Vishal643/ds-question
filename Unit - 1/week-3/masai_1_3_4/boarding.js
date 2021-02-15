// 4
// 12 14 15 6
// 8 5 7 4

function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var check_in_bag_wt = input_arr[1].split(" ");
	var hand_bag_wt = input_arr[2].split(" ");
	for (var i = 0; i < hand_bag_wt.length; i++) {
		console.log(
			Number(hand_bag_wt[i]) <= 7 && Number(check_in_bag_wt[i]) <= 15
				? "Boarding"
				: "Stop"
		);
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
