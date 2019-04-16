function range(start, end, step) {
  if (
     start == undefined ||
     end == undefined ||
     step == undefined ||
     start > end ||
     step <= 0
     ) {
    return [];
  }

  // i would prefer 'let' > 'var' but the lighthouse linter doesn't allow
  var array = [];

  for (var i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
