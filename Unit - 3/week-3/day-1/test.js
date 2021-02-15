function runProgram(input) {
    input = input.trim().split('\n');
	let number_of_input = Number(input.shift().trim());
	let matrix = [];
	for (var i = 0; i < number_of_input; i++) {
		matrix.push(input[i].trim().split(' '));
	}
    // let res,towers,heights,i=1,count=1,stack=[],command,top=-1,ans=[],compare
    
        // command=input[i++].trim().split(" ")
        console.log(matrix)
        // if(command[0]==="PUSH")
        // {
        //     stack.push(Number(command[1]))
        //     top++
        // }
        // else  if(command[0]==="POP")
        // {
        //     if(top===-1)
        //     console.log("EMPTY")
        //     else
        //     {
        //         stack.pop()
        //         top--
        //     }
        // }
        // else if(command[0]==="MIN")
        // {
        //     if(top===-1)
        //     console.log("EMPTY")
        //     else
        //     {
        //         compare=[...stack];
        //         compare.sort((a,b) => a-b)
        //         console.log(compare[0])
        //     }
            
        // }
​
    
    
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    13
    MIN
    PUSH 92
    MIN
	PUSH 82
	POP
	POP
	MIN
	PUSH 10
	MIN
	POP
	MIN
	MIN
	POP`);
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