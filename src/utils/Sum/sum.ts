export default function sum(n1: number, n2: number): number {
  if (n1 === 5 || n2 === 5) {
    throw new Error("Provided Parameters Must Not Be The Number 5");
  }
  return n1 + n2;
}
