const bubbletest = (e) => {
  // code for testing bubble sort
  console.log("bubbleSort test function");
  let arr = unsorted_array();
  console.log("array passed inside bubble sort", arr);
  let length = arr.length;
  for (a = 0; a < length; a++) {
    for (b = a + 1; b < length; b++) {
      if (arr[a] < arr[b]) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
      }
    }
  }
  return arr;
};
