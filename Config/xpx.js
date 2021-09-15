function reverse(arr, l, r) {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr;
}

function ArrayChallenge(arr) {
  x = arr[0];
  n = arr.length;

  arr = reverse(arr, x, n - 1);
  arr = reverse(arr, 0, x - 1);

  arr = reverse(arr, 0, n - 1);

  return arr;
}
