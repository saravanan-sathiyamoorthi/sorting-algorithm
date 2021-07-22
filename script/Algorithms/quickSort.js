const partition = (arr, start, end) => {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    visualize(`bar-${i + 1}`, arr[i], "red", (delay += 10));
    if (arr[i] < pivotValue) {
      visualize(`bar-${i + 1}`, arr[i], "orange", (delay += 10));
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      visualize(
        `bar-${pivotIndex + 1}`,
        arr[pivotIndex],
        "orange",
        (delay += 10)
      );
      pivotIndex++;
    }
  }
  visualize(`bar-${end + 1}`, arr[end], "purple", (delay += 10));
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  visualize(`bar-${pivotIndex + 1}`, arr[pivotIndex], "purple", (delay += 10));

  return pivotIndex;
};

const quickSorting = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSorting(arr, start, index - 1);
  quickSorting(arr, index + 1, end);
};

const quickSort = () => {
  console.clear();
  console.log("quickSort");
  disable_buttons();
  sortingArray = unsorted_array();
  console.log("unsorted Array", sortingArray);
  delay = 10;
  for (i = 0; i < sortingArray.length; i++)
    visualize(`bar-${i + 1}`, sortingArray[i], "orange", (delay += 10));
  quickSorting(sortingArray, 0, sortingArray.length - 1);
  for (j = 0; j < sortingArray.length; j++)
    visualize(`bar-${j + 1}`, sortingArray[j], "green", (delay += 10));
  enable_buttons(delay);
  console.log("Sorted Array", sortingArray);
  console.log(delay);
};

quick.addEventListener("click", quickSort);

// Done by : Saravanan Sathiyamoorthi
