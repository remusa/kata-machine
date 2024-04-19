export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i <= haystack.length; i++) {
        const item = haystack[i];

        if (item === needle) {
            return true;
        }
    }

    return false;
}
