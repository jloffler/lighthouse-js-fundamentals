function concat(ar1, ar2) {
  var array = ar1;
  for (var i = 0; i < ar2.length; i++) {
    array.push(ar2[i]);
  }
  return array;
}
