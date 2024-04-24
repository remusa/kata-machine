import insertion_sort from "@code/InsertionSort";
import { expect, test } from "vitest";

test("insertion-sort", () => {
	const arr = [9, 3, 7, 4, 69, 420, 42];
	// where is my debugger
	insertion_sort(arr);
	expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
