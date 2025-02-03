const qqq = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud', 'boom', 'bang'];
export function foo() {
  const idx = Math.floor(Math.random() * qqq.length);
  return qqq[idx];
}