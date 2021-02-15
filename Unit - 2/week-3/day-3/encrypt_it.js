function toLower(char) {
	let lowerStr = "abcdefghijklmnopqrstuvwxyz";
	for (let i = 0; i < lowerStr.length; i++) {
		if (char === lowerStr[i]) {
			return true;
		}
	}
	return false;
}
function toUpper(char) {
	let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (let i = 0; i < upperStr.length; i++) {
		if (char === upperStr[i]) {
			return true;
		}
	}
	return false;
}
function isNumber(num) {
	let number = "0123456789";
	for (let i = 0; i < number.length; i++) {
		if (num === number[i]) {
			return true;
		}
	}
	return false;
}
function runProgram(input) {
	input = input.trim().split("\n");
	let str = input[0].trim();
	let key = Number(input[1]);

	let encrypted_string = "";

	for (let i = 0; i < str.length; i++) {
		if (toUpper(str[i])) {
			encrypted_string += String.fromCharCode(
				(Number(str.charCodeAt(i) + key - 65) % 26) + 65
			);
		} else if (toLower(str[i])) {
			encrypted_string += String.fromCharCode(
				(Number(str.charCodeAt(i) + key - 97) % 26) + 97
			);
		} else if (isNumber(str[i])) {
			encrypted_string += String.fromCharCode(
				(Number(str.charCodeAt(i) + key - 48) % 10) + 48
			);
		} else {
			encrypted_string += str[i];
		}
	}
	console.log(encrypted_string);
}

// for (let i = 0; i < str.length; i++) {
// 	if (toLower(str[i])) {
// 		let lowerStr = "abcdefghijklmnopqrstuvwxyz";
// 		for (let j = 0; j < lowerStr.length; j++) {
// 			if (str[i] === lowerStr[j] && (j % 26) + key >= 26) {
// 				encrypted_string += lowerStr[(j % 26) + key - 26];
// 			} else if (str[i] === lowerStr[j] && (j % 26) + key < 26) {
// 				encrypted_string += lowerStr[(j % 26) + key];
// 			}
// 		}
// 	} else if (toUpper(str[i])) {
// 		let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 		for (let j = 0; j < upperStr.length; j++) {
// 			if (str[i] === upperStr[j] && (j % 26) + key >= 26) {
// 				encrypted_string += upperStr[(j % 26) + key - 26];
// 			} else if (str[i] === upperStr[j] && (j % 26) + key < 26) {
// 				encrypted_string += upperStr[(j % 26) + key];
// 			}
// 		}
// 	} else if (isNumber(str[i])) {
// 		let number = "0123456789";
// 		for (let j = 0; j < number.length; j++) {
// 			if (str[i] === number[j]) {
// 				if ((j % 10) + key > 10) {
// 					encrypted_string += number[(j % 10) + key - 10];
// 				} else {
// 					encrypted_string += number[(j % 10) + key];
// 				}
// 			}
// 		}
// 	} else {
// 		encrypted_string += str[i];
// 	}
// }
// console.log(encrypted_string);
//}
//2 3 4 5
if (process.env.USERNAME === "vishal") {
	runProgram(`
	-------------------a
	100
	`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}
