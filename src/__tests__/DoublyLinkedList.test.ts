import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./ListTest";
import { expect, test } from "vitest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
