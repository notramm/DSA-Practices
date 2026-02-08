let n = 1259;

function CountDigit(n) {
  let count = 0;

  if (n === 0) return 1;
  n = Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(CountDigit(n));
