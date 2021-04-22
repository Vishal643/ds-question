class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	insertAtEnd(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	traverse() {
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}

	removeFromEnd() {
		if (!this.head) return;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
			this.head = null;
		}
		return current;
	}

	removeFromStart() {
		if (!this.head) return;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	insertAtStart(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	getItemFromSpecificIndex(index) {
		if (index < 0 || index > this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	setItemForSpecificIndex(index, val) {
		let isIndex = this.getItemFromSpecificIndex(index);
		if (isIndex) {
			isIndex.val = val;
			return true;
		}
		return false;
	}

	insertValueAtIndex(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.insertAtEnd(val);
			return true;
		}
		if (index === 0) {
			this.insertAtStart(val);
			return true;
		}

		let newNode = new Node(val);
		let prev = this.getItemFromSpecificIndex(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	abc(index, val) {
		let newNode = new Node(val);

		if (index === 0) {
			if (!this.head) {
				this.head = newNode;
				this.tail = this.head;
			} else {
				newNode.next = this.head;
				this.head = newNode;
			}
			return this.head;
		} else if (index > 0) {
			let prev;

			let counter = 0;
			let current = this.head;
			while (counter !== index - 1) {
				current = current.next;
				counter++;
			}

			prev = current;

			let temp = prev.next;
			prev.next = newNode;
			newNode.next = temp;
			return this.head;
		} else {
			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.tail.next = newNode;
				this.tail = newNode;
			}
			return this.head;
		}
	}

	removeNodeFromSpecificIndex(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.removeFromStart();
		if (index === this.length - 1) return this.removeFromEnd();
		let prevNode = this.getItemFromSpecificIndex(index - 1);
		let removedNode = prevNode.next;
		prevNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	remove(position) {
		if (position < 0) return null;
		if (position === 0) {
			if (!this.head) return null;
			let currentHead = this.head;
			this.head = currentHead.next;
			return currentHead;
		} else if (position > 0) {
			let prevNode;

			let counter = 0;
			let current = this.head;
			while (counter !== position - 1) {
				current = current.next;
				counter++;
			}
			prevNode = current;
			let removedNode = prevNode.next;
			prevNode.next = removedNode.next;
			return removedNode;
		} else {
			if (!this.head) return null;
			let current = this.head;
			let newTail = current;
			while (current.next) {
				newTail = current;
				current = current.next;
			}
			this.tail = newTail;
			this.tail.next = null;

			return current;
		}
	}
}

let list = new SinglyLinkedList();
list.insertAtEnd('hii');
list.insertAtEnd('hello');
list.insertAtEnd('!');
// list.removeFromEnd();
// list.removeFromEnd();
// list.removeFromEnd();
// list.removeFromStart();
// list.removeFromStart();
// list.removeFromStart();
// list.insertAtStart('First');

// list.insertAtEnd('!');
// list.removeFromEnd();
// list.insertAtEnd(1);
// console.log(list.getItemFromSpecificIndex(3));
// console.log(list.setItemForSpecificIndex(0, 'dbc'));
// list.inserValueAtIndex(1, 'abc');
// list.traverse();
// console.log(list.length, list.tail, list.head);
list.remove(2);
list.traverse();
