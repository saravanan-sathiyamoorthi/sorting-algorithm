const quickSort = () => {
  console.clear();
  console.log("quickSort");
  disable_buttons();
  sortingArray = unsorted_array();

  delay = 10;
  enable_buttons(delay);
  console.log("unsorted Array", sortingArray);
};

quick.addEventListener("click", quickSort);

// Done by : Saravanan Sathiyamoorthi
