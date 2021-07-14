const mergeSort = () => {
  console.clear();
  console.log("mergeSort");
  disable_buttons();
  sortingArray = unsorted_array();

  delay = 10;
  enable_buttons(delay);
  console.log("unsorted Array", sortingArray);
};

const mergetest = () => {
  //code for merge sort
};

merge.addEventListener("click", mergeSort);

// Done by : Saravanan Sathiyamoorthi
