const bubbleSort = () => {
  console.clear();
  console.log("bubbleSort");
  disable_buttons();
  sortingArray = unsorted_array();
  console.log("sorting ARr", sortingArray);
  lengthOfArray = sortingArray.length;
  let delay = 10;
  for (i = 0; i < lengthOfArray; i++) {
    visualize(`bar-${i + 1}`, sortingArray[i], "white", (delay += 10));
    for (j = i + 1; j < lengthOfArray; j++) {
      if (sortingArray[i] > sortingArray[j]) {
        visualize(`bar-${j + 1}`, sortingArray[j], "purple", (delay += 10));
        visualize(`bar-${j + 1}`, sortingArray[j], "purple", (delay += 10));
        [sortingArray[i], sortingArray[j]] = [sortingArray[j], sortingArray[i]];
        visualize(`bar-${i + 1}`, sortingArray[i], "pink", (delay += 10));
        visualize(`bar-${j + 1}`, sortingArray[j], "orange", (delay += 10));
      }
      visualize(`bar-${i + 1}`, sortingArray[i], "red", (delay += 10));
    }

    visualize(`bar-${i + 1}`, sortingArray[i], "green", (delay += 10));
  }
  enable_buttons(delay);
  console.log("sortedArray = ", sortingArray);
};

const bubbletest = (e) => {
  // code for testing bubble sort
  console.log("bubbleSort test function");
  let arr = unsorted_array();
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

bubble.addEventListener("click", bubbleSort);

// Done by : Saravanan Sathiyamoorthi
