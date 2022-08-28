let myPanel = document.querySelectorAll(".panel");
function openPanel() {
  if (!this.className.includes("open")) {
    myPanel.forEach((ele) => ele.classList.remove("open"));
    this.classList.add("open");
  } else {
    this.classList.remove("open");
  }
}
function openActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

myPanel.forEach((ele) => {
  ele.addEventListener("click", openPanel);
  ele.addEventListener("transitionend", openActive);
});
