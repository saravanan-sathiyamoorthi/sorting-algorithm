let create_array = document.getElementById("generate");
let array_size = document.getElementById("array_size");
let totalArrays = array_size.value;
let container_max_height = array_size.max;
let container_min_height = array_size.min;
let graph_container = document.getElementById("container");
let algos = document.querySelector(".algorithm");
let test_btn = document.getElementById("test");
let array;

let modal = document.getElementById("modal");
let modalbody = document.getElementById("modalbody");
let close_btn = document.getElementById("closemodal");
let visualize_btn = document.getElementById("testvisualize");

const reset = () => {
  graph_container.innerHTML = "";
  console.clear();
};

const newArray = () => {
  reset();
  let no_of_values = [];
  let bar_height = [];
  let i = 0;
  console.log("No_of_Nodes", totalArrays);
  while (i < totalArrays) {
    let randomNumber = Math.floor(
      Math.random() * 1.7 * (container_max_height - container_min_height) + 10
    );
    bar_height.push(randomNumber);
    no_of_values[i] = document.createElement("div");
    no_of_values[i].setAttribute("class", `bar-${i + 1}`);
    container.appendChild(no_of_values[i]);
    width = window.innerWidth / totalArrays;
    no_of_values[
      i
    ].style = `background : turquoise ; height :  ${bar_height[i]}px; width: ${width}px;margin : 0px  2px`;
    i++;
  }
  array = bar_height;
  console.log("Array = ", array);
};

const unsorted_array = () => {
  // console.log(array);
  return array;
};

const sizeOf = () => {
  totalArrays = array_size.value;
  newArray();
  size = document.getElementById("size");
  size.innerText = totalArrays;
};

window.onload = sizeOf();

const openmodal = () => {
  modal.style.display = "block";
};

const closemodal = () => {
  modal.style.display = "none";
};

const visualize_fun = () => {
  sizeOf();
  closemodal();
};

create_array.addEventListener("click", newArray);
array_size.addEventListener("input", sizeOf);
test_btn.addEventListener("click", openmodal);
close_btn.addEventListener("click", closemodal);
visualize_btn.addEventListener("click", visualize_fun);

// Done by : Saravanan Sathiyamoorthi
