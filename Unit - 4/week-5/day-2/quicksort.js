function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
}
// const swap = (arr, idx1, idx2) => {
// 	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };
function pivot(arr, start, end) {
	let pivot = arr[start];
	let swapIndex = start;
	for (let i = start + 1; i < end; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left, right) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr.join(' ');
}
function runProgram(input) {
	input = input.trim().split('\n');
	let arr = input[1].trim().split(' ').map(Number);
	console.log(quickSort(arr, 0, arr.length - 1));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    5
    3 5 0 9 8`);
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
