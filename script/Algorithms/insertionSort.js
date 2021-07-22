const insertionSort = () => {
  console.clear();
  console.log("insertionSort");
  disable_buttons();
  sortingArray = unsorted_array();
  console.log("Sorting Array", sortingArray);
  let delay = 10;
  for (x = 0; x < sortingArray.length; x++)
    visualize(`bar-${x + 1}`, sortingArray[x], "orange", (delay += 10));
  for (i = 0; i < sortingArray.length; i++) {
    visualize(`bar-${i + 1}`, sortingArray[i], "red", (delay += 10));
    for (j = i; j > 0; j--) {
      visualize(`bar-${j + 1}`, sortingArray[j], "red", (delay += 10));
      if (sortingArray[j] < sortingArray[j - 1]) {
        visualize(`bar-${j + 1}`, sortingArray[j], "purple", (delay += 10));
        visualize(`bar-${j}`, sortingArray[j - 1], "purple", (delay += 10));
        [sortingArray[j], sortingArray[j - 1]] = [
          sortingArray[j - 1],
          sortingArray[j],
        ];
        visualize(`bar-${j + 1}`, sortingArray[j], "pink", (delay += 10));
        visualize(`bar-${j}`, sortingArray[j - 1], "orange", (delay += 10));
      }
    }
  }

  for (y = 0; y < sortingArray.length; y++)
    visualize(`bar-${y + 1}`, sortingArray[y], "green", (delay += 10));

  enable_buttons(delay);
  console.log("sortedArray = ", sortingArray);
  console.log(delay);
};

insertion.addEventListener("click", insertionSort);

// Done by : Saravanan Sathiyamoorthi
