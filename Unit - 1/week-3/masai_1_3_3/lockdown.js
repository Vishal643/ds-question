// 1. Flour = 5kg| Price = 110 per kg

// 2. Rice = 2kg| Price = 120 per kg

// 3. Sugar = 2kg| Price = 42 per kg

// 4. Pulse = 3kg| Price = 53 per kg

// 5. Bread = 2 packet | Price = 40 per packet

// 6. Milk = 5 litre| Price = 32 per litre
// 7. Oil = 2 litre| Price = 126 per litre
//4
//0 1 1 1 0 0 1

// 1200 1400 2000
// 5 6 2

function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var num_weeks = Number(input_arr[0].split(" "));
    var item_requirement = input_arr[1].split(" ");

    var qty_arr = [5, 2, 2, 3, 2, 5, 2]
    var qty_price = [110, 120, 42, 53, 40, 32, 126]

	var total_price = 0;
	for (var i = 0; i < item_requirement.length; i++) {
		if(item_requirement[i] === '1') {
            total_price = total_price + (qty_arr[i]*qty_price[i])
        } else {
            total_price = total_price + 0
        }
	}
	console.log(total_price*num_weeks);
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
//}

