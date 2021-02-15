function runProgram(input) {
	var num = Number(input)
	if (isNaN(num) || num === 0) {
        console.log('-1');
        return
    } 
    var res = Number(((32 / num) + '').split('.')[0]) 
    if (res === 0) {
		console.log('Too Low');
	} else {
		console.log(res);
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`0`);
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
