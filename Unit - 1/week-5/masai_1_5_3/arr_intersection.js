function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var arr1 = input_arr[1].split(" ").map(Number);
	var arr2 = input_arr[2].split(" ").map(Number);
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				console.log(arr1[i]);
			}
		}
	}
}

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
