import SinglyLinkedList from "@code/SinglyLinkedList";
import { expect, test } from "vitest";
import { test_list } from "./ListTest";

test("linked-list", () => {
	const list = new SinglyLinkedList<number>();
	test_list(list);
});
