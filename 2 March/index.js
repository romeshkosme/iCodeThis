document.getElementById("switch-one").addEventListener("click", (e) => {
  const child = e.target.childNodes[1];
  if (e.target.dataset.value === "true") {
    e.target.dataset.value = "false";
    child.className = "circle";
  } else {
    e.target.dataset.value = "true";
    child.className = "circle circle-on";
  }
});
