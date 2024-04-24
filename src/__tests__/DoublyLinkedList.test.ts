import LinkedList from "@code/DoublyLinkedList";
import { expect, test } from "vitest";
import { test_list } from "./ListTest";

test("DoublyLinkedList", () => {
	const list = new LinkedList<number>();
	test_list(list);
});
