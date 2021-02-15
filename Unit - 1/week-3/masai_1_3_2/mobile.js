// 10000 20000 15000 5000
// 2 3 4 3

function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var mobile_price = input_arr[0].split(" ");
	var mobile_qty = input_arr[1].split(" ");
	var total_price = 0;
	for (var i = 0; i < mobile_price.length; i++) {
		total_price = total_price + Number(mobile_price[i]) * Number(mobile_qty[i]);
	}
	if (total_price <= 150000) console.log("Possible");
	else console.log("Not Possible");
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
