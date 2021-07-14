const heapSort = () => {
  console.clear();
  console.log("heapSort");
  disable_buttons();
  sortingArray = unsorted_array();

  delay = 10;
  enable_buttons(delay);
  console.log("unsorted Array", sortingArray);
};

const heaptest = () => {
  // code for heap sort
};

heap.addEventListener("click", heapSort);

// Done by : Saravanan Sathiyamoorthi
