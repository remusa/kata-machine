import compare from "@code/CompareBinaryTrees";
import { expect, test } from "vitest";
import { tree, tree2 } from "./tree";

test("Compare Binary Trees", () => {
	expect(compare(tree, tree)).toEqual(true);
	expect(compare(tree, tree2)).toEqual(false);
});
