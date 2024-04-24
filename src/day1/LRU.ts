export default class LRU<K, V> {
	private length: number;

	update(key: K, value: V): void {}
	get(key: K): V | undefined {}
}
