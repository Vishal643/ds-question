function runProgram(input) {
	input = input.trim().split('\n');
	let num = +input.shift();

	const customSort = (a, b) => {
		a[1] = Number(a[1]);
		a[2] = Number(a[2]);
		a[3] = Number(a[3]);

		b[1] = Number(b[1]);
		b[2] = Number(b[2]);
		b[3] = Number(b[3]);

		if (b[3] > a[3]) {
			return 1;
		} else if (b[3] < a[3]) {
			return -1;
		} else if (b[3] === a[3]) {
			if (b[1] > a[1]) {
				return 1;
			} else if (b[1] < a[1]) {
				return -1;
			} else if (b[1] === a[1]) {
				if (b[2] < a[2]) {
					return 1;
				} else if (b[2] > a[2]) {
					return -1;
				} else if (b[2] === a[2]) {
					if (b[0] < a[0]) {
						return 1;
					} else {
						return -1;
					}
				}
			}
		}
	};

	let a = input
		.map((el) => el.trim().split(' '))
		.map((el) => [el[0], +el[1], +el[2], +el[3]])
		.sort(customSort);

	for (let i = 0; i < 8; i++) {
		console.log(a[i][0]);
	}
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
