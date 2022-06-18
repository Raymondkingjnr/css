function increamentbtn() {
  let element = document.querySelector(".cart");
  let value = element.innerHTML;

  ++value;
  document.querySelector(".cart").innerHTML = value;

  if (value >= 11) {
    alert("you have reached you limit");
    document.querySelector(".cart").innerHTML = 0;
  }
}
