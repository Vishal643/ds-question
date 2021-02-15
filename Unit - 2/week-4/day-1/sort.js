function runProgram(input) {
	input = input.trim().split('\n');
	let dim = input[0].split(' ').map(Number);
	let mod = dim[1];
	let arr = input[1].trim().split(' ').map(Number);
	let tempArr = [...arr];
	let i, j, temp;
	for (i = arr.length; i > 1; i--) {
		for (j = 0; j < i - 1; j++) {
			console.log(arr[j], arr[j+1])
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	// arr = [[val, index], [val, index]]

	// console.log(indexArr);
	// let indexArr = '';
	// let visitedIndex = '';
	// for (let i = 0; i < arr.length; i++) {
	// 	for (let j = tempArr.length - 1; j >= 0; j--) {
	// 		if (arr[i] === tempArr[j]) {
	// 			indexArr += j + ' ';
	// 			// if (!j in visitedIndex) {
	// 			// } else {
	// 			// 	continue;
	// 			// }
	// 		} else {
	// 			continue;
	// 		}
	// 	}
	// }
	// console.log(indexArr);
	let indexArr = '';
	//let visitedIndex = '';
	for (let i = 0; i < arr.length; i++) {
		for (let j = tempArr.length - 1; j >= 0; j--) {
			if (arr[i] === tempArr[j]) {
				// if (indexArr.includes(tempArr[j])) {
				// 	j--;
				// 	console.log(j);
				// 	break;
				// }
				indexArr += j + ' ';
			} else {
				continue;
			}
		}
	}
	console.log(indexArr);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`5
    4 5 3 7 1`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding('ascii');
	let read = '';
	process.stdin.on('data', function (input) {
		read += input;
	});
	process.stdin.on('end', function () {
		read = read.replace(/\n$/, '');
		read = read.replace(/\n$/, '');
		runProgram(read);
	});
	process.on('SIGINT', function () {
		read = read.replace(/\n$/, '');
		runProgram(read);
		process.exit(0);
	});
}
