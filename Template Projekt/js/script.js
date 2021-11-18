// Navigation Function
function FunctionBurgerNav() {
  var element = document.getElementById("#navigation_nav");
  if (element.classList.contains("expand")) {
    element.classList.remove("expand");
  } else {
    element.classList.add("expand");
  }
}
