function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    var fizzBuzz = '';
    if (i % multiples[0] === 0) fizzBuzz += words[0];
    if (i % multiples[1] === 0) fizzBuzz += words[1];
    if (fizzBuzz === '') fizzBuzz = i;
    console.log(fizzBuzz);
  }
}

loopyLighthouse([1, 100], [3, 4], ['Fizz', 'Buzz']);
