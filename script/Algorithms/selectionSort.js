const selectionSort = () => {
  console.clear();
  console.log("selectionSort");
  disable_buttons();
  sortingArray = unsorted_array();
  lengthOfArray = sortingArray.length;
  let delay = 10;
  for (let i = 0; i < lengthOfArray; i++) {
    visualize(`bar-${i + 1}`, sortingArray[i], "orange", (delay += 10));
    min_indx = i;
    for (let j = i + 1; j < lengthOfArray; j++) {
      visualize(`bar-${j + 1}`, sortingArray[j], "orange", (delay += 10));

      if (sortingArray[j] < sortingArray[min_indx]) {
        min_indx = j;
        visualize(
          `bar-${min_indx + 1}`,
          sortingArray[min_indx],
          "red",
          (delay += 10)
        );
      }
      visualize(
        `bar-${min_indx + 1}`,
        sortingArray[min_indx],
        "red",
        (delay += 10)
      );
    }
    if (i != min_indx) {
      [sortingArray[min_indx], sortingArray[i]] = [
        sortingArray[i],
        sortingArray[min_indx],
      ];
      visualize(`bar-${i + 1}`, sortingArray[i], "green", (delay += 10));
      visualize(
        `bar-${min_indx + 1}`,
        sortingArray[min_indx],
        "green",
        (delay += 10)
      );
    }
    visualize(`bar-${min_indx + 1}`, sortingArray[i], "green", (delay += 10));
  }
  enable_buttons(delay);
  console.log("unsorted Array", sortingArray);
  console.log(delay);
};

selection.addEventListener("click", selectionSort);

// Done by : Saravanan Sathiyamoorthi
