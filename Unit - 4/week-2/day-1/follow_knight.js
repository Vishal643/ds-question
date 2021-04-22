let count = 0;
let chessBoard = new Array(11).fill('').map(() => new Array(11).fill(''));
function followKnight(row, column, moves) {
	if (row < 1 || row > 10 || column < 1 || column > 10) {
		return;
	}
	if (moves === 0 && chessBoard[row][column] === 'visited') {
		return;
	}
	if (moves === 0) {
		chessBoard[row][column] = 'visited';
		count += 1;
	} else {
		followKnight(row - 1, column + 2, moves - 1);
		followKnight(row + 1, column + 2, moves - 1);
		followKnight(row + 1, column - 2, moves - 1);
		followKnight(row - 1, column - 2, moves - 1);

		followKnight(row - 2, column - 1, moves - 1);
		followKnight(row - 2, column + 1, moves - 1);
		followKnight(row + 2, column + 1, moves - 1);
		followKnight(row + 2, column - 1, moves - 1);
	}
	return count;
}

function runProgram(input) {
	input = input.trim().split(' ').map(Number);
	let [row, column, moves] = input;
	console.log(followKnight(row, column, moves));
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`3 3 1`);
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
