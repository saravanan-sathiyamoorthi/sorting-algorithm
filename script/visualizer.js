async function visualize(target, height, color, delay_time) {
  // console.log(delay_time);
  height = height;
  window.setTimeout(function () {
    width = window.innerWidth / totalArrays;
    document.querySelector("." + target).style =
      "height :  " +
      height +
      "px; width: " +
      width +
      "px;margin : 0px  0.5px ;background :" +
      color +
      ";";
  }, delay_time);
}

const disable_buttons = () => {
  create_array.disabled = true;
  array_size.disabled = true;
  for (let i = 0; i < algos.children.length; i++) {
    algos.children[i].disabled = true;
  }
};

function enable_buttons(delay_time) {
  window.setTimeout(function () {
    create_array.disabled = false;
    array_size.disabled = false;
    for (let i = 0; i < algos.children.length; i++) {
      algos.children[i].disabled = false;
    }
  }, delay_time);
}

// Done by : Saravanan Sathiyamoorthi
