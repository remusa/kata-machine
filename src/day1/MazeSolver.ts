const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

function walk(
	maze: string[],
	wall: string,
	curr: Point,
	end: Point,
	seen: boolean[][],
	path: Point[],
): boolean {
	// base case
	// 1. off the map
	if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
		return false;
	}

	// on a wall
	if (maze[curr.y][curr.x] === wall) {
		return false;
	}

	// found
	if (curr.x === end.x && curr.y === end.y) {
		path.push(end);
		return true;
	}

	// seen
	if (seen[curr.y][curr.x]) {
		return false;
	}

	// recursive case
	// pre
	seen[curr.y][curr.x] = true;
	path.push(curr);

	// recurse
	for (let i = 0; i < directions.length; i++) {
		const [x, y] = directions[i];
		const coords = {
			x: curr.x + x,
			y: curr.y + y,
		};
		const success = walk(maze, wall, coords, end, seen, path);
		if (success) {
			return true;
		}
	}

	// post
	path.pop();

	return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	const seen: boolean[][] = [];
	const path: Point[] = [];
	const length = maze[0].length;

	for (let i = 0; i < maze.length; i++) {
		const aux = new Array(length).fill(false);
		seen.push(aux);
	}

	walk(maze, wall, start, end, seen, path);

	return path;
}
