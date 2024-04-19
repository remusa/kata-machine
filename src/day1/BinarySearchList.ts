export default function bs_list(haystack: number[], needle: number): boolean {
    // assume heystack is ordered, get lo and hi to find midpoint + 1
    let left = 0;
    let right = haystack.length;
    while (left < right) {
        const midpoint = Math.floor((right + left) / 2);
        const value = haystack[midpoint];
        if (value === needle) {
            return true;
            // biome-ignore lint/style/noUselessElse: <explanation>
        } else if (value > needle) {
            right = midpoint;
        } else {
            left = midpoint + 1;
        }
    }

    return false;
}
