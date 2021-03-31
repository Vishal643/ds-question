let Masterqueue = [];
let queueOne = [];
let queueTwo = [];
let queueThree = [];
let queueFour = [];

function runProgram(input) {
	input = input.trim().split('\n');
	// let number_of_input = Number(input.shift().trim());
	let number_of_input = +input.shift().trim();
	let matrix = [];
	for (let i = 0; i < number_of_input; i++) {
		matrix.push(input[i].trim().split(' '));
	}
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] === 'E') {
			if (matrix[i][1] === '1') {
				if (Masterqueue.length === 0) {
					Masterqueue.push(matrix[i][1]);
					queueOne.push({ club: matrix[i][1], roll: matrix[i][2] });
				} else {
					if (
						Masterqueue[0] === '1' ||
						Masterqueue[1] === '1' ||
						Masterqueue[2] === '1' ||
						Masterqueue[3] === '1'
					) {
						queueOne.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					} else {
						Masterqueue.push(matrix[i][1]);
						queueOne.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					}
				}
			} else if (matrix[i][1] === '2') {
				if (Masterqueue.length === 0) {
					Masterqueue.push(matrix[i][1]);
					queueTwo.push({ club: matrix[i][1], roll: matrix[i][2] });
				} else {
					if (
						Masterqueue[0] === '2' ||
						Masterqueue[1] === '2' ||
						Masterqueue[2] === '2' ||
						Masterqueue[3] === '2'
					) {
						queueTwo.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					} else {
						Masterqueue.push(matrix[i][1]);
						queueTwo.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					}
				}
			} else if (matrix[i][1] === '3') {
				if (Masterqueue.length === 0) {
					Masterqueue.push(matrix[i][1]);
					queueThree.push({ club: matrix[i][1], roll: matrix[i][2] });
				} else {
					if (
						Masterqueue[0] === '3' ||
						Masterqueue[1] === '3' ||
						Masterqueue[2] === '3' ||
						Masterqueue[3] === '3'
					) {
						queueThree.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					} else {
						Masterqueue.push(matrix[i][1]);
						queueThree.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					}
				}
			} else {
				if (Masterqueue.length === 0) {
					Masterqueue.push(matrix[i][1]);
					queueFour.push({ club: matrix[i][1], roll: matrix[i][2] });
				} else {
					if (
						Masterqueue[0] === '4' ||
						Masterqueue[1] === '4' ||
						Masterqueue[2] === '4' ||
						Masterqueue[3] === '4'
					) {
						queueFour.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					} else {
						Masterqueue.push(matrix[i][1]);
						queueFour.push({
							club: matrix[i][1],
							roll: matrix[i][2],
						});
					}
				}
			}
		} else if (matrix[i][0] === 'D') {
			if (Masterqueue[0] === '1') {
				if (queueOne.length === 0) {
					Masterqueue.shift();
					Masterqueue.push('1');
				} else {
					let ansStr = queueOne.shift();
					console.log(ansStr.club, ansStr.roll);
				}
			} else if (Masterqueue[0] === '2') {
				if (queueTwo.length === 0) {
					Masterqueue.shift();
					Masterqueue.push('2');
				} else {
					let ansStr = queueTwo.shift();
					console.log(ansStr.club, ansStr.roll);
				}
			} else if (Masterqueue[0] === '3') {
				if (queueThree.length === 0) {
					Masterqueue.shift();
					Masterqueue.push('3');
				} else {
					let ansStr = queueThree.shift();
					console.log(ansStr.club, ansStr.roll);
				}
			} else {
				if (queueFour.length === 0) {
					Masterqueue.shift();
					Masterqueue.push('4');
				} else {
					let ansStr = queueFour.shift();
					console.log(ansStr.club, ansStr.roll);
				}
			}
		}
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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
