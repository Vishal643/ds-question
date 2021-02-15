// 12 14
// 8 19

function runProgram(input) {
	var input_arr = input.split("\n");
	var required_dimension = input_arr[0].split(" ").map(Number);
	var image_dimension = input_arr[1].split(" ").map(Number);
	console.log(required_dimension);
	var given_length = required_dimension[0];
	var given_width = required_dimension[1];

	var my_img_length = image_dimension[0];
	var my_img_width = image_dimension[1];

	if (my_img_length > given_length && my_img_width > given_width) {
		console.log("Upload");
	} else if (my_img_length < given_length) {
		console.log("Increase Length");
	} else {
		console.log("Increase Width");
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
