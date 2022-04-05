const mostFrequentChar = (s) => {
  // State to keep track of character counts
  let count = {};
  let mostFrequent;
  let i = 0;

  // Iterare over string
  for (let char of s) {
    // if char is not in count object
    if (!(char in count)) {
      // initialize
      count[char] = 1
    } else {
      // char is in count object, increment by 1
      count[char] += 1
    }
  }

  // Iterate over keys of count
  for (let char in count) {
    // if char key is greater than i
    if (count[char] > i) {
      // set i to char
      i = count[char]
      // set mostFrequent to char
      mostFrequent = char
    }
  }
  // console.log('mostFrequent:', mostFrequent)
  return mostFrequent;
};

const mostFrequentCharOptimized = (s) => {
  // state to keep track of character count
  const count = {};

  // Iterate over string
  for (let char of s) {
    // if char is not in count
    if (!(char in count)) {
      // initialize
      count[char] = 0;
    }
    // if char is in count, increment value
    count[char] += 1;
  }

  let best = null;
  // iterate string
  for (let char of s) {
    // if count of current char is greater than best
    // on first iteration best will be null
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }
  // console.log(best)
  return best
}




mostFrequentCharOptimized('bookeeper'); // -> 'e'

// mostFrequentChar('bookeeper'); // -> 'e'

// mostFrequentChar('david'); // -> 'd'

// mostFrequentChar('abby'); // -> 'b'

// mostFrequentChar('mississippi'); // -> 'i'

// mostFrequentChar('potato'); // -> 'o'

// mostFrequentChar('eleventennine'); // -> 'e'

// mostFrequentChar("riverbed"); // -> 'r'