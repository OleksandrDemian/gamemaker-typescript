// @ts-nocheck
function test2 (i: number = 2, j = "hello") {
  return i == j;
}

function test3 (i: number = 2, j = "hello"): boolean {
  return i == j;
}

function test3 (i: number = 2, j = "hello"): string {
  const a = i * 2;
  return j + a;
}

function test4 (): number {
  const a = 2, b = 5;
  return a * b;
}
