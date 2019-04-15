// < 13 elementary; secondary inclusive 13 and 18; else lighthouse labs
function whichSchool(age) {
  if (age < 13) {
    return 'Elementary School';
  } else if (13 <= age && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}
