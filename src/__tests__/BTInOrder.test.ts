import bt_in_order from "@code/BTInOrder";
import { tree } from "./tree";
import { expect, test } from "vitest";

test("In order", function () {
    expect(bt_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
