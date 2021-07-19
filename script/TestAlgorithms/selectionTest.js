const selectiontest = (e) => {
  // code for selection sort test function
  console.log("selection sort test function");
  let arr = array;
  console.log("array passed inside selection sort ", arr);
  length = arr.length;
  for (let i = 0; i < length; i++) {
    min_indx = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min_indx]) {
        min_indx = j;
      }
    }
    if (i != min_indx) {
      [arr[min_indx], arr[i]] = [arr[i], arr[min_indx]];
    }
  }
  return arr;
};
