const arr = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud', 'boom', 'bang'];
export function foo() {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}