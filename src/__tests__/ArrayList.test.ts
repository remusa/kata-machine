import ArrayList from "@code/ArrayList";
import { test } from "vitest";
import { test_list } from "./ListTest";

test("array-list", () => {
	const list = new ArrayList<number>(3);
	test_list(list);
});
