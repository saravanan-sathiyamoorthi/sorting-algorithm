const insertionSort = () => {
  console.clear();
  console.log("insertionSort");
  disable_buttons();
  sortingArray = unsorted_array();

  delay = 10;
  enable_buttons(delay);
  console.log("unsorted Array", sortingArray);
};

const insertiontest = () => {
  // code for insertion sort
};

insertion.addEventListener("click", insertionSort);

// Done by : Saravanan Sathiyamoorthi
