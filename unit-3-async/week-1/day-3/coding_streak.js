function runProgram(input) {
	input = input.trim().split('\n');
	let days = Number(input[0]);

	let maximumCodingDay = 0,
		max = 0,
		dayStreak = 0,
		streak = 0;
	for (let i = 1; i <= days; i++) {
		let eachDay = input[i].trim();
		for (let j = 0; j < eachDay.length; j++) {
			if (eachDay[j] === 'C') {
				streak++;
				dayStreak++;
			} else {
				if (maximumCodingDay < dayStreak) {
					maximumCodingDay = dayStreak;
				}
				if (max < streak) {
					max = streak;
				}
				dayStreak = 0;
				streak = 0;
			}
			if (j === eachDay.length - 1) {
				if (maximumCodingDay < dayStreak) {
					maximumCodingDay = dayStreak;
				}
				if (i === days && max < streak) {
					max = streak;
				}
				dayStreak = 0;
			}
		}
	}
	console.log(maximumCodingDay, max);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`4
    SSSSEEEECCCCEECCCC
    CCCCCSSSSEEECCCCSS
    SSSSSEEESSCCCCCCCS
    EESSSSCCCCCCSSEEEE
	`);
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
