const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("btn");
const clr = document.getElementById("clr");

btn.addEventListener("click", function() {
  output.value = input.value.split(" ").join(" ﻿﻿﻿﻿");
});

clr.addEventListener("click", function() {
  input.value = "";
  output.value = "";
});