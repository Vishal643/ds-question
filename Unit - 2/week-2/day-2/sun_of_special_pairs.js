function isPrime(num) {
	let count = 0;
	if (num === 1 || num === 0) {
		return false;
	}
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			count++;
		}
	}
	if (count > 2) {
		return false;
	} else {
		return true;
	}
}

function runProgram(input) {
	input = input.trim().split("\n");
	let arr = input[1].trim().split(" ").map(Number);
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

if (process.env.USERNAME === "vishal") {
	runProgram(`
	6
    1 2 3 5 7 12`);
} else {
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
}
