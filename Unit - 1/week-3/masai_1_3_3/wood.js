function runProgram(input) {
	var num = Number(input)
	if(num % 3 === 0)
        console.log("Yes")
    else
        console.log("No")
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`3`);
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
