type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default class Queue<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	enqueue(item: T): void {
		const newNode: Node<T> = {
			value: item,
			next: undefined,
		};

		this.length++;

		if (!this.head) {
			this.head = this.tail = newNode;
			return;
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			this.tail!.next = newNode;
			this.tail = newNode;
		}
	}

	deque(): T | undefined {
		if (!this.head) {
			return undefined;
		}

		this.length--;

		const head = this.head;
		this.head = this.head.next;

		return head.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
