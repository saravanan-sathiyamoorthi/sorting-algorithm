bubbletrue = document.getElementById("bubbletrue");
bubblefalse = document.getElementById("bubblefalse");
heaptrue = document.getElementById("heaptrue");
heapfalse = document.getElementById("heapfalse");
insertiontrue = document.getElementById("insertiontrue");
insertionfalse = document.getElementById("insertionfalse");
mergetrue = document.getElementById("mergetrue");
meregefalse = document.getElementById("mergefalse");
quicktrue = document.getElementById("quicktrue");
quickfalse = document.getElementById("quickfalse");
selectiontrue = document.getElementById("selectiontrue");
selectionfalse = document.getElementById("selectionfalse");

const test_algo = () => {
  // console.clear();
  defaultArray = unsorted_array();
  const bubble = bubbletest(defaultArray);
  const heap = heaptest();
  const insertion = insertiontest();
  const merge = mergetest();
  const quick = quicktest();
  const selection = selectiontest(defaultArray);
  const sortedArray = defaultArray.sort((a, b) => a - b);
  console.log("Sorted array using js built-in sort function", sortedArray);
  console.log("sorted using bubble sort ", bubble);
  console.log("sorted using heap sort ", heap);
  console.log("sorted using insertion sort ", insertion);
  console.log("sorted using merge sort ", merge);
  console.log("sorted using quick sort ", quick);
  console.log("sorted using selection sort ", selection);

  if (bubble == sortedArray) {
    console.log("bubble Sort Successful! :)");
    bubbletrue.style.display = "flex";
  } else {
    console.log("bubble sort unSuccessful! :(");
    bubblefalse.style.display = "flex";
  }

  if (heap == sortedArray) {
    console.log("heap Sort Successful! :)");
    heaptrue.style.display = "flex";
  } else {
    console.log("heap sort unSuccessful!  :(");
    heapfalse.style.display = "flex";
  }

  if (insertion == sortedArray) {
    console.log("insertion Sort Successful! :)");
    insertiontrue.style.display = "flex";
  } else {
    console.log("insertion sort unSuccessful!  :(");
    insertionfalse.style.display = "flex";
  }

  if (merge == sortedArray) {
    console.log("merge Sort Successful! :)");
    mergetrue.style.display = "flex";
  } else {
    console.log("merge sort unSuccessful!  :(");
    meregefalse.style.display = "flex";
  }

  if (quick == sortedArray) {
    console.log("quick Sort Successful! :)");
    quicktrue.style.display = "flex";
  } else {
    console.log("quick sort unSuccessful!  :(");
    quickfalse.style.display = "flex";
  }

  if (selection == sortedArray) {
    console.log("selection Sort Successful! :)");
    selectiontrue.style.display = "flex";
  } else {
    console.log("selection sort unSuccessful!  :(");
    selectionfalse.style.display = "flex";
  }
};

test.addEventListener("click", test_algo);

// Done by : Saravanan Sathiyamoorthi
