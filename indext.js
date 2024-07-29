// this will select all the calculater keys
const allkye = document.querySelectorAll(".key");
const input = document.getElementById("input_box");
let string = "";
allkye.forEach((kye) => {
  kye.addEventListener("click", function (e) {
    // This will calculat  each value in inputbox
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
      // This will empty the inputbox
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
      // This will rwmove one charater
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
      // This will add innerHTML of button in inputbox
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
