function leftRotate(arr, d, n) {
	for (let i = 0; i < d; i++) {
		leftRotatebyk(arr, n);
	}
	return arr;
}

function leftRotatebyk(arr, n) {
	let temp;
	temp = arr[0];
	for (let i = 0; i < n - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr[n - 1] = temp;
}
