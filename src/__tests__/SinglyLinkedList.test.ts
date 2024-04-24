import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./ListTest";
import { expect, test } from "vitest";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
