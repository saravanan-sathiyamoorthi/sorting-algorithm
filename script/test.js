heaptrue = document.getElementById("heaptrue");
heapfalse = document.getElementById("heapfalse");

const test_algo = () => {
  console.clear();
  let arr = unsorted_array();
  jsArr = arr.slice();
  console.log("Array to be Sorted - ", arr);
  heap = heaptest(arr);
  console.log("Sorted Using HeapSort", heap);
  jsSort = jsTest(jsArr);
  console.log("Sorted Using JS - ", jsSort);
  if (heap === jsSort) {
    heaptrue.style.display = "flex";
  } else {
    heapfalse.style.display = "flex";
  }
};

test.addEventListener("click", test_algo);

const jsTest = (a) => {
  a.sort((a, b) => a - b);
  return a;
};

const heaptest = (b) => {
  console.log("heapSort test function");
  console.log("Array passed", b);
  return b;
};

// Done by : Saravanan Sathiyamoorthi
