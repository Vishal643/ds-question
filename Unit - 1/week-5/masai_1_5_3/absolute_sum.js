function isPrime(num) {
	var count = 0;
	for (var i = 1; i <= num; i++) {
		if (num % i === 0) {
			count++;
		}
	}
	if (count === 2) {
		return true;
	} else {
		return false;
	}
}

function runProgram(input) {
	var input_arr = input.split(/[\r\n]+/);
	var arr = input_arr[1].split(" ").map(Number);
	var absDiff = 0;
	for (var j = arr.length - 1; j > 0; j--) {
		for (var i = 0; i <= j - 1; i++) {
			var prime = isPrime(j - i);
			if (prime) {
				if (arr[i] > arr[j]) {
					absDiff = absDiff + (arr[i] - arr[j]);
				} else {
					absDiff = absDiff + (arr[j] - arr[i]);
				}
			}
		}
	}

	console.log(absDiff);
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
