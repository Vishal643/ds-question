// 1200 1400 2000
// 5 6 2

function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var ticket_price = input_arr[0].split(" ");
	var ticket_num = input_arr[1].split(" ");
	var total_price = 0;
	for (var i = 0; i < ticket_price.length; i++) {
		total_price = total_price + Number(ticket_price[i]) * Number(ticket_num[i]);
	}
	console.log(total_price);
}
// if (process.env.USERNAME === "vishal") {
// 	runProgram(`1200 1400 2000 5 6 2`);
//} else {
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
//}
