function permuteRec(str, n, index, curr) {
	// base case
	if (index == n) {
		return;
	}
	console.log(curr);
	for (let i = index + 1; i < n; i++) {
		curr += str.charAt(i);
		permuteRec(str, n, i, curr);

		// backtracking
		curr = curr.substring(0, curr.length - 1);
	}
	return;
}

// Generates power set in lexicographic
// order.
function powerSet(str) {
	let arr = str;
	Array.sort(arr);
	permuteRec(new String(arr), str.length, -1, '');
}

let str = 'cab';
powerSet(str);
