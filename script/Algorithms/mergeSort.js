const mergeHelper = (leftArr, rightArr, middleIndex) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      visualize(
        `bar-${leftIndex + 1}`,
        leftArr[leftIndex],
        "red",
        (delay += 10)
      );
      output.push(leftEl);
      leftIndex++;
    } else {
      visualize(
        `bar-${rightIndex + middleIndex + 1}`,
        sortingArray[rightIndex],
        "red",
        (delay += 10)
      );
      output.push(rightEl);
      rightIndex++;
    }
  }

  sortingArray = [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
  return sortingArray;
};

const mergeSorting = (sortingArray) => {
  if (sortingArray.length <= 1) {
    return sortingArray;
  }
  const middleIndex = Math.floor(sortingArray.length / 2);
  const leftArr = sortingArray.slice(0, middleIndex);
  const rightArr = sortingArray.slice(middleIndex);
  return mergeHelper(
    mergeSorting(leftArr),
    mergeSorting(rightArr),
    middleIndex
  );
};

const mergeSort = () => {
  console.clear();
  console.log("mergeSort");
  disable_buttons();
  sortingArray = unsorted_array();
  console.log("unsorted Array", sortingArray);
  delay = 10;
  for (i = 0; i < sortingArray.length; i++)
    visualize(`bar-${i + 1}`, sortingArray[i], "orange", (delay += 10));
  mergeSorting(sortingArray);
  for (j = 0; j < sortingArray.length; j++)
    visualize(`bar-${j + 1}`, sortingArray[j], "green", (delay += 10));
  enable_buttons(delay);
  console.log("Sorted Array", sortingArray);
  console.log(delay);
};

merge.addEventListener("click", mergeSort);

// // Done by : Saravanan Sathiyamoorthi
