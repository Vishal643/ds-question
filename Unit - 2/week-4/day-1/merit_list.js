function runProgram(input) {
	input = input.trim().split('\n');
	let num = +input.shift();
	let a = input
		.map((el) => el.trim().split(' '))
		.map((el) => [el[0], +el[1], +el[2], +el[3]]);
	
	
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    10
	jack 158 85 112
	john 168 74 124
	arti 148 65 120
	bhuvan 182 84 124
	navi 182 84 124
	vijay 175 88 115
	amit 180 89 119
	kevin 182 77 120
	rohit 174 85 100
	vivek 184 75 111`);
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
