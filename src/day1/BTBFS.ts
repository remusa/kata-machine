export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | undefined | null)[] = [head]

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null
    if (!curr) {
      continue
    }

    // search
    if (curr.value === needle) {
      return true
    }

    // enqueue children
    q.push(curr.left)
    q.push(curr.right)

    return false
  }
}
