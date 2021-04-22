function meregeArr(arr1, arr2) {
	let resultArr = [];

	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			resultArr.push(arr1[i]);
			i++;
		} else {
			resultArr.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		resultArr.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		resultArr.push(arr2[j]);
		j++;
	}
	return resultArr;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return meregeArr(left, right);
}

function runProgram(input) {
	input = input.trim().split('\n');

	let arr = input[1].trim().split(' ').map(Number);

	console.log(mergeSort(arr));
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	4
    1 5 7 9 11 0 21 -1`);
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
