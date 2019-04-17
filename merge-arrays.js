function merge(ar1, ar2) {
  var array = ar1;

  // loop through all of ar2 once
  for (var i2 = 0; i2 < ar2.length; i2++) {

    /*
     * loop through 'array' once
     * 'iprime' can be declared here (outside the for loop), since the input
     * arrays are sorted we should never have to visit the same index in either
     * array more than once.
     */
    var iprime = 0;
    for (; iprime < array.length; iprime++) {
      if (ar2[i2] < array[iprime]) {
        array.splice(iprime, 0, ar2[i2]);
        break;
        // break out of the array loop since we found where to put the current index from ar2
      }
    }

    // when we reach the end of array, all the numbers left in ar2 are greater
    if (!(iprime < array.length)) {
      array.push(ar2[i2]);
    }
  }

  return array;
}

/*
I think there is probably a nicer way to do this. Probably looping through
each input array at the same time and comparing them right away.
*/

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([ 1, 3, 5 ], [2, 4, 6]), "=?", [ 1, 2, 3, 4, 5, 6]);