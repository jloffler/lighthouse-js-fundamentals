// loopy / 3
// lighthouse / 4
// ... FizzBuzz!

var START = 100;
var END = 200;

for (var i = START; i <= END; i++) {
  var fizzBuzz = '';
  if (i % 3 === 0) fizzBuzz += 'Loopy';
  if (i % 4 === 0) fizzBuzz += 'Lighthouse';
  if (fizzBuzz === '') fizzBuzz = i;
  console.log(fizzBuzz);
}
