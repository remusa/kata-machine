import bfs from "@code/BTBFS";
import { tree } from "./tree";
import { expect, test } from "vitest";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});
